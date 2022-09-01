import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/trackingParameter/view/trackingParameterViewActions';
import selectors from 'src/modules/trackingParameter/view/trackingParameterViewSelectors';
import TrackingParameterView from 'src/view/trackingParameter/view/TrackingParameterView';
import TrackingParameterViewToolbar from 'src/view/trackingParameter/view/TrackingParameterViewToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function TrackingParameterPage() {
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
              {i18n(
                'entities.trackingParameter.view.title',
              )}
            </MDTypography>
            <TrackingParameterViewToolbar match={match} />
          </MDBox>
          <MDBox p={3}>
            <TrackingParameterView
              loading={loading}
              record={record}
            />
          </MDBox>
        </MDBox>
      </Card>
    </>
  );
}

export default TrackingParameterPage;
