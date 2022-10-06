import {
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import { useSelector } from 'react-redux';
import brokerComparableSelectors from 'src/modules/broker/comparable/brokerComparableSelectors';
import MaterialLink from '@mui/material/Link';
import MDTypography from 'src/mui/components/MDTypography';
import Spinner from 'src/view/shared/Spinner';

function ComparableBrokers({ record }) {
  const { sidenavColor } = selectMuiSettings();
  const loading = useSelector(
    brokerComparableSelectors.selectLoading,
  );
  const hasRows = useSelector(
    brokerComparableSelectors.selectHasRows,
  );
  const rows = useSelector(
    brokerComparableSelectors.selectRows,
  );
  return (
    <Card>
      <CardHeader
        title={`${record.name
          .replace(/\([\w\d\s]+\)/g, '')
          .trim()} vergleichen mit`}
      />
      <CardContent>
        {loading && <Spinner />}
        {!loading &&
          hasRows &&
          rows
            .filter(({ id }) => id !== record.id)
            .map((row, idx) => (
              <MDTypography
                key={idx}
                variant="body2"
                fontWeight="regular"
                color={sidenavColor}
              >
                <MaterialLink
                  component={Link}
                  to={`/forex-cfd-broker-vergleich/${record.name_normalized}-versus-${row.name_normalized}`}
                  underline="hover"
                >
                  {`${row.name} Erfahrungen`}
                </MaterialLink>
              </MDTypography>
            ))}
      </CardContent>
    </Card>
  );
}

ComparableBrokers.propTypes = {};

export default ComparableBrokers;
