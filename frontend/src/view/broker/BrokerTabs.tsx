import { AppBar, Tabs, Tab } from '@mui/material';
import { i18n } from 'src/i18n';

interface BrokerTabsProps {
  orientation?: 'horizontal' | 'vertical';
  labels?: string[];
  value?: number;
  onChange?: any;
  broker?: number;
}

function BrokerTabs(props: BrokerTabsProps) {
  const { orientation, value, onChange, labels, broker } =
    props;
  const tabLabels = [
    ...(labels || [
      'broker',
      'overview',
      'characteristics',
      'platform',
      'markets',
      'spreads',
      'service',
      'test',
      'old',
    ]),
    broker && 'articles',
  ].filter(Boolean);
  return (
    <AppBar position="static">
      <Tabs
        orientation={orientation}
        value={value}
        onChange={onChange}
      >
        {tabLabels.map((tabLabel) => (
          <Tab
            key={tabLabel}
            label={i18n(`entities.broker.tabs.${tabLabel}`)}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}

BrokerTabs.defaultProps = {
  orientation: 'horizontal',
};

export default BrokerTabs;
