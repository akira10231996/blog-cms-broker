import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import { Grid } from '@mui/material';
import CheckboxViewItem from 'src/view/shared/view/CheckboxViewItem';
import NavigationViewItem from 'src/view/navigation/view/NavigationViewItem';

function BrokerView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextViewItem
            label={i18n('entities.broker.fields.id')}
            value={record.id}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <NavigationViewItem
            label={i18n(
              'entities.broker.fields.navigation',
            )}
            value={record.navigation}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextViewItem
            label={i18n('entities.broker.fields.name')}
            value={record.name}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextViewItem
            label={i18n(
              'entities.broker.fields.name_normalized',
            )}
            value={record.name_normalized}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n('entities.broker.fields.activated')}
            checked={record.activated}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n('entities.broker.fields.is_broker')}
            checked={record.is_broker}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n(
              'entities.broker.fields.is_compareable',
            )}
            checked={record.is_compareable}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n(
              'entities.broker.fields.top_broker',
            )}
            checked={record.top_broker}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n(
              'entities.broker.fields.top_binary_broker',
            )}
            checked={record.top_binary_broker}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n(
              'entities.broker.fields.top_forex_broker',
            )}
            checked={record.top_forex_broker}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n(
              'entities.broker.fields.featured_broker',
            )}
            checked={record.featured_broker}
          />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CheckboxViewItem
            label={i18n('entities.broker.fields.pdf')}
            checked={record.pdf}
          />
        </Grid>
      </Grid>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default BrokerView;
