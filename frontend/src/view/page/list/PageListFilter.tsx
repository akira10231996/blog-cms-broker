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
import actions from 'src/modules/page/list/pageListActions';
import selectors from 'src/modules/page/list/pageListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import { filterBooleanOptions } from 'src/modules/utils';
import AuthorAutocompleteFormItem from 'src/view/author/autocomplete/AuthorAutocompleteFormItem';
import { navigationTypeOptions } from 'src/modules/navigation/navigationUtils';
import MDBox from 'src/mui/components/MDBox';

const schema = yup.object().shape({
  idRange: yupFilterSchemas.integerRange(
    i18n('entities.page.fields.idRange'),
  ),
  link: yupFilterSchemas.string(
    i18n('entities.page.fields.link'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.page.fields.title'),
  ),
  meta_keywords: yupFilterSchemas.string(
    i18n('entities.page.fields.meta_keywords'),
  ),
  meta_description: yupFilterSchemas.string(
    i18n('entities.page.fields.meta_description'),
  ),
  body: yupFilterSchemas.string(
    i18n('entities.page.fields.body'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.page.fields.name'),
  ),
  activated: yupFilterSchemas.boolean(
    i18n('entities.page.fields.activated'),
  ),
  pdf: yupFilterSchemas.boolean(
    i18n('entities.page.fields.pdf'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.navigation.fields.type'),
  ),
});

const emptyValues = {
  idRange: [],
  name: null,
  title: null,
  link: null,
  meta_keywords: null,
  meta_description: null,
  body: null,
  activated: null,
  pdf: null,
  type: 'NONE',
};

const previewRenders = {
  idRange: {
    label: i18n('entities.page.fields.idRange'),
    render: filterRenders.decimalRange(),
  },
  link: {
    label: i18n('entities.page.fields.link'),
    render: filterRenders.generic(),
  },
  title: {
    label: i18n('entities.page.fields.title'),
    render: filterRenders.generic(),
  },
  meta_keywords: {
    label: i18n('entities.page.fields.meta_keywords'),
    render: filterRenders.generic(),
  },
  meta_description: {
    label: i18n('entities.page.fields.meta_description'),
    render: filterRenders.generic(),
  },
  name: {
    label: i18n('entities.page.fields.name'),
    render: filterRenders.generic(),
  },
  body: {
    label: i18n('entities.page.fields.body'),
  },
  activated: {
    label: i18n('entities.page.fields.activated'),
    render: filterRenders.boolean(),
  },
  pdf: {
    label: i18n('entities.page.fields.pdf'),
    render: filterRenders.boolean(),
  },
  navigation: {
    label: i18n('entities.page.fields.navigation'),
    render: filterRenders.relationToOne(),
  },
  author: {
    label: i18n('entities.page.fields.author'),
    render: filterRenders.relationToOne(),
  },
  type: {
    label: i18n('entities.navigation.fields.type'),
    render: filterRenders.enumerator(
      'entities.navigation.enumerators.type',
    ),
  },
};

function PageListFilter(props) {
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

  const onClickTypeButton = (type) => {
    form.setValue('type', type);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <MDBox
        display="flex"
        justifyContent="center"
        gap={1}
        mb={2}
      >
        {navigationTypeOptions.map((type) => (
          <MDButton
            key={type.value}
            variant={
              form.getValues('type') === type.value
                ? 'contained'
                : 'outlined'
            }
            color={sidenavColor}
            onClick={() => {
              onClickTypeButton(type.value);
            }}
          >
            {type.label}
          </MDButton>
        ))}
      </MDBox>
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
                      'entities.page.fields.idRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <SelectFormItem
                    name="type"
                    label={i18n(
                      'entities.navigation.fields.type',
                    )}
                    options={navigationTypeOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputFormItem
                    name="link"
                    label={i18n(
                      'entities.page.fields.link',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputFormItem
                    name="title"
                    label={i18n(
                      'entities.page.fields.title',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputFormItem
                    name="meta_keywords"
                    label={i18n(
                      'entities.page.fields.meta_keywords',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputFormItem
                    name="meta_description"
                    label={i18n(
                      'entities.page.fields.meta_description',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.page.fields.name',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <AuthorAutocompleteFormItem
                    name="author"
                    label={i18n(
                      'entities.page.fields.author',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <SelectFormItem
                    name="activated"
                    label={i18n(
                      'entities.page.fields.activated',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <SelectFormItem
                    name="pdf"
                    label={i18n('entities.page.fields.pdf')}
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

export default PageListFilter;
