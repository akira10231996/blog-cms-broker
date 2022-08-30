import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
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

      /**
       * ? Navigation Permissions Start
       */
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
      /**
       * ! Navigation Permissions End
       */

      /**
       * ? Broker Permissions Start
       */
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
      },
      brokerEdit: {
        id: 'brokerEdit',
        allowedRoles: [roles.admin, roles.manager],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
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
      /**
       * ! Broker Permissions End
       */

      /**
       * ? Category Permissions Start
       */
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
      /**
       * ! Category Permissions End
       */

      /**
       * ? Author Permissions Start
       */
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
      /**
       * ! Author Permissions End
       */
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
