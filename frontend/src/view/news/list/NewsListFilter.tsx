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
import actions from 'src/modules/news/list/newsListActions';
import selectors from 'src/modules/news/list/newsListSelectors';
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
import NewsAutocompleteFormItem from 'src/view/news/autocomplete/NewsAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import { filterBooleanOptions } from 'src/modules/utils';
import formActions from 'src/modules/form/formActions';

const schema = yup.object().shape({
  idRange: yupFilterSchemas.integerRange(
    i18n('entities.news.fields.idRange'),
  ),
  link: yupFilterSchemas.string(
    i18n('entities.news.fields.link'),
  ),
  meta_keywords: yupFilterSchemas.string(
    i18n('entities.news.fields.meta_keywords'),
  ),
  meta_description: yupFilterSchemas.string(
    i18n('entities.news.fields.meta_description'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.news.fields.name'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.news.fields.title'),
  ),
  teaser: yupFilterSchemas.string(
    i18n('entities.news.fields.teaser'),
  ),
  body: yupFilterSchemas.string(
    i18n('entities.news.fields.body'),
  ),
  activated: yupFilterSchemas.boolean(
    i18n('entities.news.fields.activated'),
  ),
  pdf: yupFilterSchemas.boolean(
    i18n('entities.news.fields.show_user_logged_in'),
  ),
});

const emptyValues = {
  idRange: [],
  link: null,
  meta_keywords: null,
  meta_description: null,
  name: null,
  title: null,
  teaser: null,
  body: null,
  activated: null,
  pdf: null,
};

const previewRenders = {
  idRange: {
    label: i18n('entities.news.fields.idRange'),
    render: filterRenders.decimalRange(),
  },
  link: {
    label: i18n('entities.news.fields.link'),
    render: filterRenders.generic(),
  },
  meta_keywords: {
    label: i18n('entities.news.fields.meta_keywords'),
    render: filterRenders.generic(),
  },
  meta_description: {
    label: i18n('entities.news.fields.meta_description'),
    render: filterRenders.generic(),
  },
  name: {
    label: i18n('entities.news.fields.name'),
    render: filterRenders.generic(),
  },
  title: {
    label: i18n('entities.news.fields.title'),
    render: filterRenders.generic(),
  },
  teaser: {
    label: i18n('entities.news.fields.teaser'),
    render: filterRenders.generic(),
  },
  body: {
    label: i18n('entities.news.fields.body'),
    render: filterRenders.generic(),
  },
  activated: {
    label: i18n('entities.news.fields.activated'),
    render: filterRenders.boolean(),
  },
  pdf: {
    label: i18n('entities.news.fields.pdf'),
    render: filterRenders.boolean(),
  },
};

function NewsListFilter(props) {
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
        initialValues,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues, false));
    setExpanded(false);
    dispatch(formActions.doRefresh());
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
    dispatch(formActions.doRefresh());
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
                      'entities.news.fields.idRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="link"
                    label={i18n(
                      'entities.news.fields.link',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="meta_description"
                    label={i18n(
                      'entities.news.fields.meta_description',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.news.fields.name',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="title"
                    label={i18n(
                      'entities.news.fields.title',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="activated"
                    label={i18n(
                      'entities.news.fields.activated',
                    )}
                    options={filterBooleanOptions}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="pdf"
                    label={i18n('entities.news.fields.pdf')}
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

export default NewsListFilter;
