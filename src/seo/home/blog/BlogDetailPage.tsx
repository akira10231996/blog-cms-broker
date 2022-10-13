import { i18n } from '../../i18n';
import AuthorView from '../shared/AuthorView';
import Box from '@mui/material/Box';
import HtmlView from '../shared/HtmlView';
import Layout from '../Layout';
import React from 'react';
import TopBrokersView from '../broker/components/TopBrokersView';
import Typography from '@mui/material/Typography';

const BlogDetailPage = ({ record, ...props }) => {
  return (
    <Layout
      title={record?.name}
      keywords={[record?.metakeywords]}
      description={record?.metadescription}
      author={record?.author}
      url={props.url}
    >
      {record && (
        <Box display="flex" flexDirection="column" gap={2}>
          <>
            <HtmlView value={record.content} />
            <AuthorView value={record.author} />
            <Typography variant="h3">
              {i18n('entities.home.top_brokers')}
            </Typography>
            <TopBrokersView rows={props.topBrokers} />
          </>
        </Box>
      )}
    </Layout>
  );
};

export default BlogDetailPage;
