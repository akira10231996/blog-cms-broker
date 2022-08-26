import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/navigation/view/navigationViewActions';
import selectors from 'src/modules/navigation/view/navigationViewSelectors';
import NavigationView from 'src/view/navigation/view/NavigationView';
import NavigationViewToolbar from 'src/view/navigation/view/NavigationViewToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function NavigationPage() {
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
              {i18n('entities.navigation.view.title')}
            </MDTypography>
            <NavigationViewToolbar match={match} />
          </MDBox>
          <NavigationView
            loading={loading}
            record={record}
          />
        </MDBox>
      </Card>
    </>
  );
}

export default NavigationPage;
