import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import { Grid } from '@mui/material';
import CheckboxViewItem from 'src/view/shared/view/CheckboxViewItem';
import NewsViewItem from 'src/view/news/view/NewsViewItem';
import HtmlViewItem from 'src/view/shared/view/HtmlViewItem';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function NewsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <>
        <MDBox
          pb={3}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <MDTypography variant="h4">
            {'meta data'}
          </MDTypography>
        </MDBox>
        <MDBox p={3}>
          <Grid spacing={2} container>
            <Grid item md={12} xs={12}>
              <TextViewItem
                label={i18n('entities.news.fields.link')}
                value={record.link}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextViewItem
                label={i18n('entities.news.fields.title')}
                value={record.title}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.news.fields.meta_keywords',
                )}
                value={record.meta_keywords}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.news.fields.meta_description',
                )}
                value={record.meta_description}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox
          pb={3}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <MDTypography variant="h4">
            {'teasers'}
          </MDTypography>
        </MDBox>
        <MDBox p={3}>
          <Grid spacing={2} container>
            <Grid item md={12} xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.news.fields.teaser_link',
                )}
                value={record.teaser_link}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.news.fields.teaser_title',
                )}
                value={record.teaser_title}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <HtmlViewItem
                label={i18n('entities.news.fields.teaser')}
                value={record.teaser}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox
          pb={3}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <MDTypography variant="h4">
            {'pages content'}
          </MDTypography>
        </MDBox>
        <MDBox p={3}>
          <Grid spacing={2} container>
            <Grid item md={12} xs={12}>
              <TextViewItem
                label={i18n('entities.news.fields.name')}
                value={record.name}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <HtmlViewItem
                label={i18n('entities.news.fields.body')}
                value={record.body}
              />
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <CheckboxViewItem
              label={i18n('entities.news.fields.activated')}
              checked={record.activated}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <CheckboxViewItem
              label={i18n('entities.news.fields.pdf')}
              checked={record.pdf}
            />
          </Grid>
        </Grid>
      </>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default NewsView;
