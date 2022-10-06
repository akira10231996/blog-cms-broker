import Category from 'src/view/home/sidebar/Category';
import Container from '@mui/material/Container';
import FeaturedBrokers from 'src/view/home/sidebar/FeaturedBrokers';
import Grid from '@mui/material/Grid';
import MostRead from 'src/view/home/sidebar/MostRead';
import PageLayout from 'src/mui/examples/LayoutContainers/PageLayout';
import PropTypes from 'prop-types';
import TopBrokers from 'src/view/home/sidebar/TopBrokers';
import ForexSchool from 'src/view/home/sidebar/ForexSchool';

function Layout({ children }) {
  return (
    <PageLayout fixedNavBar={false}>
      <Container>
        <Grid spacing={2} container>
          <Grid lg={9} md={8} xs={12} item>
            {children}
          </Grid>
          <Grid lg={3} md={4} xs={12} item>
            <Grid spacing={2} container>
              <Grid xs={12} item>
                <TopBrokers />
              </Grid>
              <Grid xs={12} item>
                <FeaturedBrokers />
              </Grid>
              <Grid xs={12} item>
                <Category />
              </Grid>
              <Grid xs={12} item>
                <MostRead />
              </Grid>
              <Grid xs={12} item>
                <ForexSchool />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
