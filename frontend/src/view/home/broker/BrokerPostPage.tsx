import { DEFAULT_MOMENT_FORMAT_DATE_ONLY } from 'src/config/common';
import { FormButtons } from 'src/view/shared/styles/FormWrapper';
import { Grid, IconButton, Tooltip } from '@mui/material';
import { i18n } from 'src/i18n';
import { Link } from 'react-router-dom';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import actions from 'src/modules/brokerPost/home/brokerPostHomeActions';
import brokerPostFormActions from 'src/modules/brokerPost/form/brokerPostFormActions';
import brokerPostFormSelectors from 'src/modules/brokerPost/form/brokerPostFormSelectors';
import brokerPostSelectors from 'src/modules/brokerPost/brokerPostSelectors';
import BugReportIcon from '@mui/icons-material/BugReport';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HtmlEditorFormItem from 'src/view/shared/form/items/HtmlEditorFormItem';
import HtmlView from 'src/view/shared/view/HtmlView';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import MDBox from 'src/mui/components/MDBox';
import MDButton from 'src/mui/components/MDButton';
import MDTypography from 'src/mui/components/MDTypography';
import moment from 'moment';
import Pagination from 'src/view/shared/table/Pagination';
import postDestroyActions from 'src/modules/brokerPost/destroy/brokerPostDestroyActions';
import postReviewActions from 'src/modules/brokerPost/review/brokerPostReviewActions';
import postSpamActions from 'src/modules/brokerPost/spam/brokerPostSpamActions';
import RatingFormItem from 'src/view/shared/form/items/RatingFormItem';
import RatingViewItem from 'src/view/shared/view/RatingViewItem';
import ReCaptchaV2FormItem from 'src/view/shared/form/items/ReCaptchaV2FormItem';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SaveIcon from '@mui/icons-material/Save';
import selectors from 'src/modules/brokerPost/home/brokerPostHomeSelectors';
import Spinner from 'src/view/shared/Spinner';
import TopBrokersView from 'src/view/home/broker/components/TopBrokersView';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';

const schema = yup.object().shape({
  name: yupFormSchemas.string(i18n('common.name'), {
    required: true,
    min: 1,
    max: 255,
  }),
  email: yupFormSchemas.string(i18n('common.email'), {
    required: true,
    min: 1,
    max: 255,
  }),
  review: yupFormSchemas.string(i18n('common.review'), {
    required: true,
  }),
  rating: yupFormSchemas.integer(i18n('common.rating'), {}),
  recaptcha: yupFormSchemas.string(
    i18n('common.recaptcha'),
    { required: true },
  ),
});

const BrokerPostPage = ({ brokerId, name, middle }) => {
  const { sidenavColor } = selectMuiSettings();
  const [dispatched, setDispatched] = useState(false);
  const [postRecordIdToDestroy, setPostRecordIdToDestroy] =
    useState(null);
  const [postRecordIdToSpam, setPostRecordIdToSpam] =
    useState(null);
  const [postRecordIdToReview, setPostRecordIdToReview] =
    useState(null);
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const match = useRouteMatch();

  const dispatch = useDispatch();
  const saveLoading = useSelector(
    brokerPostFormSelectors.selectSaveLoading,
  );
  const loading = useSelector(selectors.selectLoading);
  const hasRows = useSelector(selectors.selectHasRows);
  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const hasPermissionToEdit = useSelector(
    brokerPostSelectors.selectPermissionToEdit,
  );

  const onSubmit = (values) => {
    values.broker_id = brokerId;
    dispatch(brokerPostFormActions.doCreate(values));
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doOpenDestroyConfirmModal = (id) => {
    setPostRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setPostRecordIdToDestroy(null);
  };

  const doOpenSpamConfirmModal = (id) => {
    setPostRecordIdToSpam(id);
  };

  const doCloseSpamConfirmModal = () => {
    setPostRecordIdToSpam(null);
  };

  const doOpenReviewConfirmModal = (id) => {
    setPostRecordIdToReview(id);
  };

  const doCloseReviewConfirmModal = () => {
    setPostRecordIdToReview(null);
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();
    dispatch(postDestroyActions.doDestroy(id, match.url));
    setDispatched(!dispatched);
  };

  const doSpam = (id) => {
    doCloseSpamConfirmModal();
    dispatch(postSpamActions.doSpam(id, match.url));
    setDispatched(!dispatched);
  };

  const doReview = (id) => {
    doCloseReviewConfirmModal();
    dispatch(postReviewActions.doReview(id, match.url));
    setDispatched(!dispatched);
  };

  useEffect(() => {
    dispatch(
      actions.doFetch({
        spam: false,
        review_required: false,
        deleted: false,
        broker: brokerId,
      }),
    );
  }, [dispatched]);

  return (
    <>
      <MDTypography
        id="list-top-4-pagination"
        variant="h3"
        pb={3}
      >
        {`${name} Erfahrungen von Tradern`}
      </MDTypography>
      <MDBox
        display="flex"
        flexDirection="column"
        color="text"
        gap={4}
      >
        {loading && <Spinner />}
        {!loading &&
          hasRows &&
          rows.map((post, idx, arr) => (
            <MDBox key={post.id}>
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDBox>
                  <MDTypography
                    variant="h5"
                    color="warning"
                  >
                    {`${name} Erfahrungen von: ${post.name}`}
                  </MDTypography>
                  <MDTypography
                    variant="button"
                    color="info"
                    fontWeight="bold"
                  >
                    {`Verfasst am: ${moment(
                      post.modified,
                    ).format(
                      DEFAULT_MOMENT_FORMAT_DATE_ONLY,
                    )}`}
                  </MDTypography>
                </MDBox>
                <MDBox display="flex" gap={1}>
                  <RatingViewItem
                    value={post.rating}
                    precision={0.1}
                    emptyIcon={
                      <img
                        src="/images/star-grey.png"
                        height="24px"
                      />
                    }
                    icon={
                      <img
                        src="/images/star-fill.png"
                        height="24px"
                      />
                    }
                  />
                  {hasPermissionToEdit && (
                    <>
                      <Tooltip title={i18n('common.edit')}>
                        <IconButton
                          size="small"
                          color={sidenavColor}
                          component={Link}
                          to={`/admin/broker-post/${post.id}/edit`}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={i18n('common.spam')}>
                        <IconButton
                          size="small"
                          color={sidenavColor}
                          onClick={() =>
                            doOpenSpamConfirmModal(post.id)
                          }
                        >
                          <BugReportIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={i18n('common.review')}
                      >
                        <IconButton
                          size="small"
                          color={sidenavColor}
                          onClick={() =>
                            doOpenReviewConfirmModal(
                              post.id,
                            )
                          }
                        >
                          <ReviewsIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        title={i18n('common.destroy')}
                      >
                        <IconButton
                          size="small"
                          color={sidenavColor}
                          onClick={() =>
                            doOpenDestroyConfirmModal(
                              post.id,
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </>
                  )}
                </MDBox>
              </MDBox>
              <MDBox
                color="text"
                fontSize="1rem"
                fontWeight="regular"
                pt={1}
              >
                <HtmlView value={post.review} />
              </MDBox>
              {idx + 1 ===
                Number((arr.length / 2).toFixed(0)) &&
                middle}
            </MDBox>
          ))}
        {!loading && !hasRows && (
          <MDTypography variant="body2">
            {i18n('common.noCommit')}
          </MDTypography>
        )}
      </MDBox>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
        entriesPerPage
        showTotalEntries
      />

      <MDTypography variant="h4" my={2}>
        {i18n('entities.home.top_brokers')}
      </MDTypography>
      <TopBrokersView />

      <MDTypography variant="h4">
        {i18n('common.writeReview')}
      </MDTypography>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item md={6} xs={12}>
              <InputFormItem
                name="name"
                variant="standard"
                label={i18n('common.name')}
                required={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputFormItem
                name="email"
                variant="standard"
                label={i18n('common.email')}
                required={true}
              />
            </Grid>
            <Grid item xs={12}>
              <RatingFormItem
                color={sidenavColor}
                name="rating"
                emptyIcon={
                  <img src="/images/star-grey.png" />
                }
                icon={<img src="/images/star-fill.png" />}
                label={i18n('common.rating')}
              />
            </Grid>
            <Grid item xs={12}>
              <HtmlEditorFormItem
                name="review"
                required={true}
                label={i18n('common.review')}
                toolbars={[
                  {
                    name: 'basicstyles',
                    groups: ['basicstyles'],
                  },
                  {
                    name: 'paragraph',
                    groups: ['list'],
                  },
                  { name: 'colors' },
                ]}
              />
            </Grid>
            <Grid item xs={12} mb={2}>
              <ReCaptchaV2FormItem />
            </Grid>
          </Grid>
          <FormButtons>
            <MDButton
              variant="gradient"
              color={sidenavColor}
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              Erfahrungsbericht speichern
            </MDButton>
          </FormButtons>
        </form>
      </FormProvider>
      {postRecordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(postRecordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
      {postRecordIdToSpam && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doSpam(postRecordIdToSpam)}
          onClose={() => doCloseSpamConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
      {postRecordIdToReview && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doReview(postRecordIdToReview)}
          onClose={() => doCloseReviewConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
};

export default BrokerPostPage;
