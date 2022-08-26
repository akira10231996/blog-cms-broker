import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.navigation.fields.name'),
    schema: schemas.string(
      i18n('entities.navigation.fields.name'),
      {
        required: true,
        min: 1,
        max: 200,
      },
    ),
  },
  {
    name: 'link',
    label: i18n('entities.navigation.fields.link'),
    schema: schemas.string(
      i18n('entities.navigation.fields.link'),
      {
        required: true,
        min: 1,
        max: 200,
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.navigation.fields.title'),
    schema: schemas.string(
      i18n('entities.navigation.fields.title'),
      {
        required: true,
        min: 1,
        max: 200,
      },
    ),
  },
  {
    name: 'target',
    label: i18n('entities.navigation.fields.target'),
    schema: schemas.string(
      i18n('entities.navigation.fields.target'),
      {
        required: true,
        min: 1,
        max: 15,
      },
    ),
  },
  {
    name: 'sort',
    label: i18n('entities.navigation.fields.category'),
    schema: schemas.integer(
      i18n('entities.navigation.fields.category'),
      {
        required: true,
        min: 0,
      },
    ),
  },
  {
    name: 'activated',
    label: i18n('entities.navigation.fields.activated'),
    schema: schemas.boolean(
      i18n('entities.navigation.fields.activated'),
      {},
    ),
  },
  {
    name: 'show_user_logged_in',
    label: i18n(
      'entities.navigation.fields.show_user_logged_in',
    ),
    schema: schemas.boolean(
      i18n(
        'entities.navigation.fields.show_user_logged_in',
      ),
      {},
    ),
  },
  {
    name: 'show_in_navigation',
    label: i18n(
      'entities.navigation.fields.show_in_navigation',
    ),
    schema: schemas.boolean(
      i18n('entities.navigation.fields.show_in_navigation'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.navigation.fields.type'),
    schema: schemas.integer(
      i18n('entities.navigation.fields.type'),
      {
        min: 0,
      },
    ),
  },
  {
    name: 'parent_id',
    label: i18n('entities.navigation.fields.parent_id'),
    schema: schemas.integer(
      i18n('entities.navigation.fields.parent_id'),
      {},
    ),
  },
];
