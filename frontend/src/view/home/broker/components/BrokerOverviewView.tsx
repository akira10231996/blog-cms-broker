import { Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import AttrTypography from 'src/view/home/broker/shared/AttrTypography';
import BrokerAttrs from 'src/view/home/broker/shared/BrokerAttrs';
import BrokerImages from 'src/view/home/broker/shared/BrokerImages';
import BrokerUpsides from 'src/view/home/broker/shared/BrokerUpsides';
import CheckboxViewItem from 'src/view/shared/view/CheckboxViewItem';
import HtmlView from 'src/view/shared/view/HtmlView';
import MDBox from 'src/mui/components/MDBox';
import MDButton from 'src/mui/components/MDButton';
import MDTypography from 'src/mui/components/MDTypography';
import SendIcon from '@mui/icons-material/Send';

function BrokerOverviewView({ record }) {
  const { sidenavColor } = selectMuiSettings();
  console.log(record);
  return (
    <Grid spacing={2} container>
      <Grid xs={12} item>
        <HtmlView value={record.meta?.teaser} />
      </Grid>
      <Grid md={6} xs={12} item>
        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.text.upsides')}
        </MDTypography>
        <BrokerUpsides record={record} />

        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.fields.minimum_deposit')}
        </MDTypography>
        <AttrTypography>
          {record.meta?.minimum_deposit}
        </AttrTypography>

        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.fields.scalping_allowed')}
        </MDTypography>
        <MDBox position="relative" my={1} pl={3}>
          <CheckboxViewItem
            checked={record.meta?.scalping_allowed}
          />
        </MDBox>

        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.fields.regulation')}
        </MDTypography>
        <BrokerAttrs
          records={record.regulatory_authorities}
        />

        <MDTypography variant="h4" mt={2}>
          {i18n(
            'entities.broker.fields.deposit_guarantees',
          )}
        </MDTypography>
        <BrokerAttrs
          records={record.deposit_guarantees}
          renderFn={(v) => `${v.name} ${v.text}`}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.fields.broker_type')}
        </MDTypography>
        <AttrTypography>
          {i18n(
            `entities.broker.enumerators.meta.broker_type.${record.meta?.broker_type}`,
          )}
        </AttrTypography>

        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.fields.certificates')}
        </MDTypography>
        <BrokerImages records={record.certificates} />

        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.fields.spreads')}
        </MDTypography>
        <BrokerAttrs
          records={record.spreads}
          attrs={{
            link: 'url',
            title: 'spread',
          }}
          filterFn={(v) => v.primary}
        />

        <MDTypography variant="h4" mt={2}>
          {i18n('entities.broker.fields.specialties')}
        </MDTypography>
        <BrokerAttrs
          records={record.features}
          attrs={{ link: 'url', title: 'feature' }}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <MDButton
          variant="contained"
          href={record.meta?.homepage}
          target="_blank"
          color={sidenavColor}
          startIcon={<SendIcon />}
          fullWidth
        >
          {i18n('entities.broker.text.nowTo', record.name)}
        </MDButton>
      </Grid>
      <Grid md={6} xs={12} item>
        <MDButton
          variant="contained"
          target="_blank"
          href={record.meta?.demo_url}
          color="primary"
          startIcon={<SendIcon />}
          fullWidth
        >
          {i18n('entities.broker.text.freeDemoAccount')}
        </MDButton>
      </Grid>
      <MDTypography variant="h2" py={3}>
        {i18n(
          'entities.broker.text.activeTraderExperience',
        )}
      </MDTypography>
    </Grid>
  );
}

export default BrokerOverviewView;
