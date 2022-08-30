import {
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UndoIcon from '@mui/icons-material/Undo';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/broker/list/brokerListActions';
import selectors from 'src/modules/broker/list/brokerListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import BrokerAutocompleteFormItem from 'src/view/broker/autocomplete/BrokerAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import { filterBooleanOptions } from 'src/modules/utils';

const schema = yup.object().shape({
  idRange: yupFilterSchemas.integerRange(
    i18n('entities.broker.fields.idRange'),
  ),
  parent: yupFilterSchemas.relationToOne(
    i18n('entities.broker.fields.parent'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.broker.fields.name'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.broker.fields.title'),
  ),
  link: yupFilterSchemas.string(
    i18n('entities.broker.fields.link'),
  ),
  type: yupFilterSchemas.string(
    i18n('entities.broker.fields.type'),
  ),
  activated: yupFilterSchemas.boolean(
    i18n('entities.broker.fields.activated'),
  ),
  show_user_logged_in: yupFilterSchemas.boolean(
    i18n('entities.broker.fields.show_user_logged_in'),
  ),
  show_in_broker: yupFilterSchemas.boolean(
    i18n('entities.broker.fields.show_in_broker'),
  ),
});

const emptyValues = {
  idRange: [],
  name: null,
  title: null,
  link: null,
  parent: null,
  type: null,
  activated: null,
  show_user_logged_in: null,
  show_in_broker: null,
};

const previewRenders = {
  idRange: {
    label: i18n('entities.broker.fields.idRange'),
    render: filterRenders.decimalRange(),
  },
  navigation: {
    label: i18n('entities.broker.fields.navigation'),
    render: filterRenders.relationToOne(),
  },
  name: {
    label: i18n('entities.broker.fields.name'),
    render: filterRenders.generic(),
  },
  name_normalized: {
    label: i18n('entities.broker.fields.name_normalized'),
    render: filterRenders.generic(),
  },
  activated: {
    label: i18n('entities.broker.fields.activated'),
    render: filterRenders.boolean(),
  },
  is_broker: {
    label: i18n('entities.broker.fields.is_broker'),
    render: filterRenders.boolean(),
  },
  is_compareable: {
    label: i18n('entities.broker.fields.is_compareable'),
    render: filterRenders.boolean(),
  },
  top_broker: {
    label: i18n('entities.broker.fields.top_broker'),
    render: filterRenders.boolean(),
  },
  top_binary_broker: {
    label: i18n('entities.broker.fields.top_binary_broker'),
    render: filterRenders.boolean(),
  },
  top_forex_broker: {
    label: i18n('entities.broker.fields.top_forex_broker'),
    render: filterRenders.boolean(),
  },
  featured_broker: {
    label: i18n('entities.broker.fields.featured_broker'),
    render: filterRenders.boolean(),
  },
  pdf: {
    label: i18n('entities.broker.fields.pdf'),
    render: filterRenders.boolean(),
  },
};

function BrokerListFilter(props) {
  const { sidenavColor } = selectMuiSettings();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'onSubmit',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
        >
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="idRange"
                    label={i18n(
                      'entities.broker.fields.idRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <BrokerAutocompleteFormItem
                    name="navigation"
                    label={i18n(
                      'entities.broker.fields.navigation',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.broker.fields.name',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputFormItem
                    name="name_normalized"
                    label={i18n(
                      'entities.broker.fields.name_normalized',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="activated"
                    label={i18n(
                      'entities.broker.fields.activated',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="is_broker"
                    label={i18n(
                      'entities.broker.fields.is_broker',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="is_compareable"
                    label={i18n(
                      'entities.broker.fields.is_compareable',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="top_broker"
                    label={i18n(
                      'entities.broker.fields.top_broker',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="top_binary_broker"
                    label={i18n(
                      'entities.broker.fields.top_binary_broker',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="top_forex_broker"
                    label={i18n(
                      'entities.broker.fields.top_forex_broker',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="featured_broker"
                    label={i18n(
                      'entities.broker.fields.featured_broker',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SelectFormItem
                    name="pdf"
                    label={i18n(
                      'entities.broker.fields.pdf',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <MDButton
                  variant="gradient"
                  color={sidenavColor}
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </MDButton>

                <MDButton
                  variant="outlined"
                  color={sidenavColor}
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </MDButton>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default BrokerListFilter;
