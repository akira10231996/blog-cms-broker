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
import actions from 'src/modules/promotion/list/promotionListActions';
import selectors from 'src/modules/promotion/list/promotionListSelectors';
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
import PromotionAutocompleteFormItem from 'src/view/promotion/autocomplete/PromotionAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import { filterBooleanOptions } from 'src/modules/utils';

const schema = yup.object().shape({
  idRange: yupFilterSchemas.integerRange(
    i18n('entities.promotion.fields.idRange'),
  ),
  link: yupFilterSchemas.string(
    i18n('entities.promotion.fields.link'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.promotion.fields.name'),
  ),
  activated: yupFilterSchemas.boolean(
    i18n('entities.promotion.fields.activated'),
  ),
});

const emptyValues = {
  idRange: [],
  link: null,
  name: null,
  activated: null,
};

const previewRenders = {
  idRange: {
    label: i18n('entities.promotion.fields.idRange'),
    render: filterRenders.decimalRange(),
  },
  link: {
    label: i18n('entities.promotion.fields.link'),
    render: filterRenders.generic(),
  },
  name: {
    label: i18n('entities.promotion.fields.name'),
    render: filterRenders.generic(),
  },
  activated: {
    label: i18n('entities.promotion.fields.activated'),
    render: filterRenders.boolean(),
  },
};

function PromotionListFilter(props) {
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
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="idRange"
                    label={i18n(
                      'entities.promotion.fields.idRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.promotion.fields.name',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={4} xs={12}>
                  <SelectFormItem
                    name="activated"
                    label={i18n(
                      'entities.promotion.fields.activated',
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

export default PromotionListFilter;
