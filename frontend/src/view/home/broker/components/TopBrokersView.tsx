import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import brokerTopSelectors from 'src/modules/broker/top/brokerTopSelectors';
import CircleNumber from 'src/view/home/shared/CircleNumber';
import ImageView from 'src/view/home/ImageView';
import MaterialLink from '@mui/material/Link';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import OverallRating from 'src/view/home/broker/shared/OverallRating';
import Spinner from 'src/view/shared/Spinner';
import RatingViewItem from 'src/view/shared/view/RatingViewItem';
import LazyLoad from 'react-lazy-load';

function TopBrokersView() {
  const loading = useSelector(
    brokerTopSelectors.selectLoading,
  );
  const hasRows = useSelector(
    brokerTopSelectors.selectHasRows,
  );
  const rows = useSelector(brokerTopSelectors.selectRows);
  return (
    <>
      {loading && <Spinner />}
      {!loading && hasRows && (
        <Grid spacing={2} container>
          {rows.map((row, idx) => (
            <Grid key={row.id} xs={12} item>
              {/* <LazyLoad> */}
              <MDBox
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                  '& > * + *': {
                    ml: 2,
                  },
                }}
              >
                <CircleNumber>{idx + 1}</CircleNumber>
                <MDBox
                  display="flex"
                  flexGrow={1}
                  flexDirection="row"
                  flexWrap="wrap"
                  alignItems="center"
                  sx={{
                    '& > * + *': {
                      ml: 2,
                      my: 1,
                    },
                  }}
                >
                  <MaterialLink
                    display="block"
                    flexShrink={0}
                    href={row.meta?.homepage}
                    target="_blank"
                  >
                    <ImageView
                      value={
                        row.broker_image_broker_detail_logo
                      }
                      alt={row.name}
                      sx={{
                        height: '70px',
                        objectFit: 'contain',
                      }}
                    />
                  </MaterialLink>
                  <ImageView
                    value={
                      row.broker_image_broker_regulation_image
                    }
                    alt={row.name}
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'block',
                      },
                      height: '60px',
                      objectFit: 'contain',
                      ml: 2,
                    }}
                  />
                  <MDBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    sx={{
                      '& > * + *': {
                        mt: 1,
                      },
                    }}
                  >
                    <RatingViewItem
                      value={row.rating?.overall_rating}
                      precision={0.1}
                      emptyIcon={
                        <img
                          src="/images/star-grey.png"
                          alt="star-grey"
                          height="32px"
                        />
                      }
                      icon={
                        <img
                          src="/images/star-fill.png"
                          alt="star-fill"
                          height="32px"
                        />
                      }
                      size="large"
                    />
                    <MDTypography
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      mt={1}
                      lineHeight={1}
                    >
                      <MaterialLink
                        component={Link}
                        to={`/erfahrungsberichte/${row.name_normalized}`}
                        underline="hover"
                      >
                        {`${row.rating?.overall_reviews} Erfahrungsberichte lesen`}
                      </MaterialLink>
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
              {/* </LazyLoad> */}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

TopBrokersView.propTypes = {};

export default TopBrokersView;
