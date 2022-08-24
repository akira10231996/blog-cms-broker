import Header from 'src/view/layout/Header';
import DashboardLayout from 'src/mui/examples/LayoutContainers/DashboardLayout';
import MDBox from 'src/mui/components/MDBox';
import Footer from 'src/mui/examples/Footer';
import React from 'react';

class Layout extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <>
        <DashboardLayout>
          <Header {...this.props} />
          <MDBox py={3}>{this.props.children}</MDBox>
          <Footer />
        </DashboardLayout>
      </>
    );
  }
}

export default Layout;
