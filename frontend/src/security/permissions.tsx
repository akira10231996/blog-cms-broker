import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      // #region _BASE_
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      // #endregion

      // #region Author
      authorImport: {
        id: 'authorImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      authorCreate: {
        id: 'authorCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      authorEdit: {
        id: 'authorEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      authorDestroy: {
        id: 'authorDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      authorRead: {
        id: 'authorRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      authorAutocomplete: {
        id: 'authorAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion

      // #region Broker
      brokerImport: {
        id: 'brokerImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      brokerCreate: {
        id: 'brokerCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.broker_image_top_broker_logo,
        ],
      },
      brokerEdit: {
        id: 'brokerEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.broker_image_top_broker_logo,
        ],
      },
      brokerDestroy: {
        id: 'brokerDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.broker_image_top_broker_logo,
        ],
      },
      brokerRead: {
        id: 'brokerRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      brokerAutocomplete: {
        id: 'brokerAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion

      // #region Affiliate Link
      affiliateLinkImport: {
        id: 'affiliateLinkImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      affiliateLinkCreate: {
        id: 'affiliateLinkCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      affiliateLinkEdit: {
        id: 'affiliateLinkEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      affiliateLinkDestroy: {
        id: 'affiliateLinkDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      affiliateLinkRead: {
        id: 'affiliateLinkRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      affiliateLinkAutocomplete: {
        id: 'affiliateLinkAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion

      // #region Tracking Parameter
      trackingParameterImport: {
        id: 'trackingParameterImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      trackingParameterCreate: {
        id: 'trackingParameterCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      trackingParameterEdit: {
        id: 'trackingParameterEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      trackingParameterDestroy: {
        id: 'trackingParameterDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      trackingParameterRead: {
        id: 'trackingParameterRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      trackingParameterAutocomplete: {
        id: 'trackingParameterAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion

      // #region Category
      categoryImport: {
        id: 'categoryImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      categoryCreate: {
        id: 'categoryCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      categoryEdit: {
        id: 'categoryEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      categoryDestroy: {
        id: 'categoryDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      categoryRead: {
        id: 'categoryRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      categoryAutocomplete: {
        id: 'categoryAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion

      // #region Navigation
      navigationImport: {
        id: 'navigationImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      navigationCreate: {
        id: 'navigationCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      navigationEdit: {
        id: 'navigationEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      navigationDestroy: {
        id: 'navigationDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      navigationRead: {
        id: 'navigationRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      navigationAutocomplete: {
        id: 'navigationAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion

      // #region News
      newsImport: {
        id: 'newsImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      newsCreate: {
        id: 'newsCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      newsEdit: {
        id: 'newsEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      newsDestroy: {
        id: 'newsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      newsRead: {
        id: 'newsRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      newsAutocomplete: {
        id: 'newsAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion

      // #region News
      promotionImport: {
        id: 'promotionImport',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      promotionCreate: {
        id: 'promotionCreate',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      promotionEdit: {
        id: 'promotionEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      promotionDestroy: {
        id: 'promotionDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      promotionRead: {
        id: 'promotionRead',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      promotionAutocomplete: {
        id: 'promotionAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.manager,
          roles.custom,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      // #endregion
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
