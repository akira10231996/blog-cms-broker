import { Box, TableContainer } from '@mui/material';
import { i18n } from 'src/i18n';
import { Link } from 'react-router-dom';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'src/modules/news/list/newsListActions';
import Checkbox from '@mui/material/Checkbox';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import DataTableBodyCell from 'src/mui/examples/Tables/DataTable/DataTableBodyCell';
import DataTableHeadCell from 'src/mui/examples/Tables/DataTable/DataTableHeadCell';
import DeleteIcon from '@mui/icons-material/Delete';
import destroyActions from 'src/modules/news/destroy/newsDestroyActions';
import destroySelectors from 'src/modules/news/destroy/newsDestroySelectors';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import MaterialLink from '@mui/material/Link';
import MDBadgeDot from 'src/mui/components/MDBadgeDot';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import moment from 'moment';
import newsSelectors from 'src/modules/news/newsSelectors';
import Pagination from 'src/view/shared/table/Pagination';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import selectors from 'src/modules/news/list/newsListSelectors';
import Spinner from 'src/view/shared/Spinner';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import { DEFAULT_MOMENT_FORMAT_DATE_ONLY } from 'src/config/common';

function NewsListTable(props) {
  const { sidenavColor } = selectMuiSettings();
  const [recordIdToDestroy, setRecordIdToDestroy] =
    useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    newsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    newsSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <TableContainer sx={{ boxShadow: 'none' }}>
        <Table>
          <MDBox component="thead">
            <TableRow>
              <DataTableHeadCell
                padding="checkbox"
                width="0"
                sorted={false}
              >
                {hasRows && (
                  <Checkbox
                    checked={Boolean(isAllSelected)}
                    onChange={() => doToggleAllSelected()}
                    size="small"
                  />
                )}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('id')}
                sorted={
                  sorter.field === 'id'
                    ? sorter.order
                    : 'none'
                }
                align="right"
                width="0"
              >
                {i18n('entities.news.fields.id')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('title')}
                sorted={
                  sorter.field === 'title'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.news.fields.title')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('created')}
                sorted={
                  sorter.field === 'created'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.news.fields.created')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} width="0">
                {i18n('entities.news.fields.activated')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} width="0">
                {' '}
              </DataTableHeadCell>
            </TableRow>
          </MDBox>
          <TableBody>
            {loading && (
              <TableRow>
                <DataTableBodyCell
                  align="center"
                  colSpan={100}
                >
                  <Spinner />
                </DataTableBodyCell>
              </TableRow>
            )}
            {!loading && !hasRows && (
              <TableRow>
                <DataTableBodyCell
                  align="center"
                  colSpan={100}
                >
                  <MDTypography align="center">
                    {i18n('table.noData')}
                  </MDTypography>
                </DataTableBodyCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <DataTableBodyCell padding="checkbox">
                    <Checkbox
                      checked={selectedKeys.includes(
                        row.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.id)
                      }
                      size="small"
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell align="right">
                    {row.id}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <MaterialLink
                      component={Link}
                      to={`/aktuelles/${row.link}`}
                    >
                      {row.title}
                    </MaterialLink>
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {moment(row.created).format(
                      DEFAULT_MOMENT_FORMAT_DATE_ONLY,
                    )}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {['activated', 'pdf'].map((field) => (
                      <MDBadgeDot
                        key={field}
                        width="max-content"
                        badgeContent={i18n(
                          `entities.news.fields.${field}`,
                        )}
                        color={
                          Boolean(row[field])
                            ? 'info'
                            : 'error'
                        }
                        variant="contained"
                      />
                    ))}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <MDBox
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Tooltip title={i18n('common.view')}>
                        <IconButton
                          size="small"
                          component={Link}
                          color={sidenavColor}
                          to={`/news/${row.id}`}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Tooltip>
                      {hasPermissionToEdit && (
                        <Tooltip
                          title={i18n('common.edit')}
                        >
                          <IconButton
                            size="small"
                            color={sidenavColor}
                            component={Link}
                            to={`/news/${row.id}/edit`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {hasPermissionToDestroy && (
                        <Tooltip
                          title={i18n('common.destroy')}
                        >
                          <IconButton
                            size="small"
                            color={sidenavColor}
                            onClick={() =>
                              doOpenDestroyConfirmModal(
                                row.id,
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </MDBox>
                  </DataTableBodyCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <Pagination
          onChange={doChangePagination}
          disabled={loading}
          pagination={pagination}
          entriesPerPage
          showTotalEntries
        />
      </TableContainer>

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default NewsListTable;
