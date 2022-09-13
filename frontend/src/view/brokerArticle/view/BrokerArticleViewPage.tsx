import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/brokerArticle/view/brokerArticleViewActions';
import selectors from 'src/modules/brokerArticle/view/brokerArticleViewSelectors';
import BrokerArticleView from 'src/view/brokerArticle/view/BrokerArticleView';
import BrokerArticleViewToolbar from 'src/view/brokerArticle/view/BrokerArticleViewToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function BrokerArticlePage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Card>
        <MDBox py={3} px={3}>
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <MDTypography variant="h3">
              {i18n('entities.brokerArticle.view.title')}
            </MDTypography>
            <BrokerArticleViewToolbar match={match} />
          </MDBox>
          <MDBox p={3}>
            <BrokerArticleView
              loading={loading}
              record={record}
            />
          </MDBox>
        </MDBox>
      </Card>
    </>
  );
}

export default BrokerArticlePage;
