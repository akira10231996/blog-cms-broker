import { i18n } from 'src/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AuthorView from 'src/view/shared/view/AuthorView';
import Breadcrumb from 'src/view/home/Breadcrumb';
import BrokerCharacteristicsView from 'src/view/home/broker/components/BrokerCharacteristicsView';
import BrokerHeader from 'src/view/home/broker/components/BrokerHeader';
import BrokerHomepageUrls from 'src/view/home/broker/components/BrokerHomepageUrls';
import BrokerMarketsView from 'src/view/home/broker/components/BrokerMarketsView';
import BrokerOverviewView from 'src/view/home/broker/components/BrokerOverviewView';
import BrokerPlatformView from 'src/view/home/broker/components/BrokerPlatformView';
import BrokerPostPage from 'src/view/home/broker/BrokerPostPage';
import BrokerServiceView from 'src/view/home/broker/components/BrokerServiceView';
import BrokerSpreadsView from 'src/view/home/broker/components/BrokerSpreadsView';
import BrokerTabs from 'src/view/broker/BrokerTabs';
import brokerViewActions from 'src/modules/broker/view/brokerViewActions';
import brokerViewSelectors from 'src/modules/broker/view/brokerViewSelectors';
import HtmlView from 'src/view/shared/view/HtmlView';
import Layout from 'src/view/home/Layout';
import MDBox from 'src/mui/components/MDBox';
import PageContent from 'src/view/shared/view/PageContent';
import Spinner from 'src/view/shared/Spinner';
import TabPanel from 'src/view/shared/tab/TabPanel';
import TopBrokersView from 'src/view/home/broker/components/TopBrokersView';
import categoriesListData from 'src/mui/layouts/pages/rtl/data/categoriesListData';

const BrokerViewPage = () => {
  const [dispatched, setDispatched] = useState(false);

  const dispatch = useDispatch();

  const match = useRouteMatch();

  const loading = useSelector(
    brokerViewSelectors.selectLoading,
  );
  const record = useSelector(
    brokerViewSelectors.selectRecord,
  );

  useEffect(() => {
    dispatch(brokerViewActions.doFind(match.url));
    setDispatched(true);
  }, [match.url]);

  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event: any, newValue: any) =>
    setTabValue(newValue);

  return (
    <Layout>
      <MDBox display="flex" flexDirection="column" gap={2}>
        {loading && <Spinner />}
        {dispatched && !loading && record && (
          <>
            <PageContent>
              <Breadcrumb
                items={[
                  {
                    name: record.categories[0]?.category
                      ?.name,
                    route:
                      record.categories[0]?.category?.link,
                  },
                  {
                    name: record.name,
                    route: match.url,
                  },
                ]}
              />
              <BrokerHeader record={record} />
              <MDBox py={2}>
                <BrokerTabs
                  labels={[
                    'overview',
                    'characteristics',
                    'platform',
                    'markets',
                    'spreads',
                    'service',
                  ]}
                  value={tabValue}
                  onChange={handleSetTabValue}
                />
              </MDBox>
              <MDBox py={3}>
                <TabPanel value={tabValue} index={0}>
                  <BrokerOverviewView record={record} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <BrokerCharacteristicsView
                    record={record}
                  />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                  <BrokerPlatformView record={record} />
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                  <BrokerMarketsView record={record} />
                </TabPanel>
                <TabPanel value={tabValue} index={4}>
                  <BrokerSpreadsView record={record} />
                </TabPanel>
                <TabPanel value={tabValue} index={5}>
                  <BrokerServiceView record={record} />
                </TabPanel>
              </MDBox>
              <MDBox>
                <BrokerHomepageUrls record={record} />
              </MDBox>
            </PageContent>
            <PageContent>
              <BrokerPostPage record={record.id} />
            </PageContent>
            {Boolean(record.creteria) &&
              Boolean(record.creteria.body) && (
                <PageContent>
                  <MDBox fontSize="1rem">
                    <HtmlView
                      value={record.creteria?.body}
                    />
                  </MDBox>
                </PageContent>
              )}
            <AuthorView value={record.author} />
            <PageContent>
              <h3>{i18n('entities.home.top_brokers')}</h3>
              <TopBrokersView />
              <BrokerHomepageUrls record={record} />
            </PageContent>
          </>
        )}
      </MDBox>
    </Layout>
  );
};

export default BrokerViewPage;
