const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
    more: 'More',
  },

  app: {
    title: 'broker-bewertungen.de',
  },

  api: {
    menu: 'API',
  },

  mui: {
    configurator: {
      title: 'Material UI Configurator',
      description: 'See our dashboard options.',
      sidenavColor: 'Colors',
      sidenavType: {
        title: 'Sidenav Type',
        description:
          'Choose between different sidenav types.',
        dark: 'Dark',
        transparent: 'Transparent',
        white: 'white',
      },
      navbarFixed: 'Navbar Fixed',
      sidenavMini: 'Sidenav Mini',
      sidenavDark: 'Light / Dark',
    },
  },

  collapses: {
    affiliateLink: {
      menu: 'Affiliate links',
    },
    routes: {
      menu: 'Routes',
    },
  },

  entities: {
    affiliateLink: {
      name: 'affiliateLink',
      label: 'All Affiliate links',
      menu: 'Affiliate links',
      exporterFileName: 'affiliateLink_export',
      list: {
        menu: 'Affiliate links',
        title: 'Affiliate links',
      },
      create: {
        success: 'Affiliate link successfully saved',
      },
      update: {
        success: 'Affiliate link successfully saved',
      },
      destroy: {
        success: 'Affiliate link successfully deleted',
      },
      destroyAll: {
        success: 'Affiliate link(s) successfully deleted',
      },
      edit: {
        title: 'Edit Affiliate link',
      },
      fields: {
        id: 'Id',
        idRange: 'Id #',
        hash: 'Hash',
        link: 'Link',
        display_hash: 'Display Hash',
        meta_info: 'Meta Info',
      },
      enumerators: {
        target: {
          _blank: 'New Window',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Affiliate link',
      },
      view: {
        title: 'View Affiliate link',
      },
      importer: {
        title: 'Import Affiliate links',
        fileName: 'affiliateLink_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    author: {
      name: 'author',
      label: 'All Authors',
      menu: 'Authors',
      exporterFileName: 'author_export',
      list: {
        menu: 'Authors',
        title: 'Authors',
      },
      create: {
        success: 'Author successfully saved',
      },
      update: {
        success: 'Author successfully saved',
      },
      destroy: {
        success: 'Author successfully deleted',
      },
      destroyAll: {
        success: 'Author(s) successfully deleted',
      },
      edit: {
        title: 'Edit Author',
      },
      fields: {
        id: 'Id',
        idRange: 'Id #',
        name: 'Surname',
        link: 'Link',
        image: 'Image',
        description: 'Description',
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Author',
      },
      view: {
        title: 'View Author',
      },
      importer: {
        title: 'Import Authors',
        fileName: 'author_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    broker: {
      name: 'broker',
      label: 'All Brokers',
      menu: 'Brokers',
      exporterFileName: 'broker_export',
      list: {
        menu: 'Brokers',
        title: 'Brokers',
      },
      create: {
        success: 'Broker successfully saved',
      },
      update: {
        success: 'Broker successfully saved',
      },
      destroy: {
        success: 'Broker successfully deleted',
      },
      destroyAll: {
        success: 'Broker(s) successfully deleted',
      },
      edit: {
        title: 'Edit Broker',
      },
      fields: {
        // #region Broker
        id: 'Id',
        idRange: 'Id #',
        navigation: 'Main Navigation',
        name: 'Surname',
        name_normalized: 'Name normalized',
        activated: 'Activated',
        is_broker: 'Is Broker',
        is_compareable: 'Show in comparison list',
        top_broker: 'Top Broker',
        top_binary_broker: 'Top Binary Broker',
        top_forex_broker: 'Top Forex Signal Provider',
        featured_broker: 'Featured Broker',
        pdf: 'Download PDF',
        author: 'Author',
        author_name: 'Author Name',
        author_link: 'Author link',
        // #endregion

        // #region Broker's Categories
        categories: 'Categories',
        categories_in_top_lists:
          'Show in top lists of these categories',
        // #endregion

        // #region Broker Metadata
        metadata: 'Metadata',
        homepage: 'Homepage',
        homepage_title: 'homepage_title',
        homepage_impression: 'Impression Script',
        broker_type: 'Broker Type',
        description: 'Description',
        teaser: 'Teaser Text',
        demo_url: 'Demo account',
        account_url: 'Live Account',
        maximum_leverage: 'Maximum Leverage',
        minimum_deposit: 'Minimum Deposit',
        minimum_deposit_short:
          'Minimum deposit (short for overview)',
        custodian_fees: 'Custody Fees',
        mobile_trading: 'Mobile Trading',
        phone_order: 'Telephone Trading',
        licensed_broker: 'Licensed Broker',
        withholding_tax: 'Withholding Tax',
        scalping_allowed: 'Scalping Allowed',
        // #endregion

        // #region Upside
        upsides: 'Demo Account',
        upside: {
          type: 'Type',
          text: 'Text',
        },
        // #endregion

        // #region Regulatory Authority
        regulatory_authorities: 'Regulatory Authorities',
        regulatory_authority: {
          name: 'Surname',
          abbreviation: 'Abbreviation',
          url: 'Homepage',
        },
        // #endregion

        // #region Deposit Guarantee
        deposit_guarantees: 'Deposit Guarantees',
        deposit_guarantee: {
          name: 'Surname',
          url: 'Homepage',
          text: 'Free Text',
        },
        // #endregion

        // #region Certificate
        certificates: 'Certificates',
        certificate: {
          name: 'Surname',
          url: 'Homepage',
        },
        // #endregion

        // #region Spread
        spreads: 'Spreads',
        spread: {
          spread: 'Spread',
          url: 'Homepage',
          primary: 'Primary Spread',
        },
        // #endregion

        // #region Spread
        features: 'Specialties',
        feature: {
          feature: 'Special Feature',
          url: 'Homepage',
        },
        // #endregion

        // #region Bank
        banks: 'Bank holding the account',
        bank: {
          name: 'Surname',
          url: 'Homepage',
        },
        // #endregion

        // #region Phone
        phone: 'Phone',
        // #endregion

        // #region Fax
        fax: 'Fax',
        // #endregion

        // #region Email
        email: 'Email',
        // #endregion

        // #region Address
        addresses: 'Contact',
        address: {
          line_0: 'Address 1st line',
          line_1: 'Address 2nd line',
          line_2: 'Address 3rd line',
          line_3: 'Address 4th line',
          line_4: 'Address 5th line',
          line_5: 'Address 6th line',
        },
        // #endregion

        // #region Video
        video: 'Video',
        youtube_hash: 'Youtube Hash',
        youtube_hash_prefix:
          'https://www.youtube.com/watch?v=',
        youtube_hash_description:
          'All Youtube videos have a hash. This can be copied from the url.',
        // #endregion

        // #region Checkbox
        checkbox: {
          image_type: 'Image Type',
          items: 'Items',
          text: 'Text',
          url: 'URL',
          trade_platform: 'trade_platform',
          free_demo_account: 'free_demo_account',
          metatrader_4: 'metatrader_4',
          metatrader_5: 'metatrader_5',
          web_platform: 'web_platform',
          mobile_trading_apps: 'mobile_trading_apps',
          hedging_allowed: 'hedging_allowed',
          additional_trade_tools: 'additional_trade_tools',
          automated_trade_possible:
            'automated_trade_possible',
          api_interfaces: 'api_interfaces',
          social_trading: 'social_trading',
          rate_alarms: 'rate_alarms',
          platform_tutorials: 'platform_tutorials',
          layout_saveable: 'layout_saveable',
          one_click_trading: 'one_click_trading',
          trade_from_chart: 'trade_from_chart',
          all_positions_closeable:
            'all_positions_closeable',
          guaranteed_stops: 'guaranteed_stops',
          phone_trade_possible: 'phone_trade_possible',
          commissions: 'commissions',
          important_market_spreads:
            'important_market_spreads',
          cost_for_overnight: 'cost_for_overnight',
          fees_for_deposit_disbursal:
            'fees_for_deposit_disbursal',
          free_orderchange: 'free_orderchange',
          free_depot: 'free_depot',
          no_platform_fees: 'no_platform_fees',
          german_support: 'german_support',
          contact: 'contact',
          daily_trade_help: 'daily_trade_help',
          german_webinar: 'german_webinar',
          german_seminar: 'german_seminar',
          coachings_available: 'coachings_available',
          knowledge_base: 'knowledge_base',
          tradeable_markets: 'tradeable_markets',
          margin: 'margin',
          managed_accounts: 'managed_accounts',
          instant_execution: 'instant_execution',
          positive_slippage_possible:
            'positive_slippage_possible',
          ecn_order_execution: 'ecn_order_execution',
          liquidity_prodiver: 'liquidity_prodiver',
          micro_lots: 'micro_lots',
          index_cfd_tradeable_below_point:
            'index_cfd_tradeable_below_point',
          rate_switch_24_5_index_cfd:
            'rate_switch_24_5_index_cfd',
          no_financial_cost_index_cfd:
            'no_financial_cost_index_cfd',
          no_financial_cost_raw_material_cfd:
            'no_financial_cost_raw_material_cfd',
          cfd_contracts_automatic_roll:
            'cfd_contracts_automatic_roll',
          real_stocks_cfd_spreads:
            'real_stocks_cfd_spreads',
          dma_stocks: 'dma_stocks',
          minimal_ordersize_stocks:
            'minimal_ordersize_stocks',
          company: 'company',
          office_in_germany: 'Office in Germany',
          bonus: 'Bonus',
          regulation_and_deposit_security:
            'Regulation And Deposit Insurance',
          reserve_liabiliry:
            'Obligation to make additional payments',
          interest_on_deposit:
            'Interest on account deposit',
          witholding_tax: 'witholding_tax',
          segregated_accounts:
            'Customer funds separated (segregated accounts)',
          account_currencies: 'Account Currencies',
          posibilities_for_withdrawals:
            'Opportunities for deposits and withdrawals',
        },
        // #endregion

        // #region Order Types
        order_types: 'Order Types',
        // #endregion
      },
      tabs: {
        broker: 'Broker',
        overview: 'Overview',
        characteristics: 'Characteristics',
        platform: 'Platform',
        markets: 'Markets',
        spreads: 'Spreads',
        service: 'Service',
        test: 'Test',
        old: 'Old',
      },
      enumerators: {
        upside: {
          type: {
            UPSIDE: 'Upside',
            DOWNSIDE: 'Downside',
          },
        },
        meta: {
          broker_type: {
            ECN: 'ECN Broker',
            MT4: 'MetaTrader Broker',
            MM: 'Market Maker',
            ECN_AND_MT4: 'ECN Broker (MT4)',
            MM_AND_MT4: 'Market Maker (MT4)',
            DMA: 'DMA Broker',
            STP: 'STP Broker',
            STP_AND_MT4: 'STP Broker (MT4)',
            MARKET_MAKER_AND_STP:
              'Market Maker / STP Broker',
            BITCOIN_EXCHANGE:
              'Exchange for bitcoin and cryptocurrencies',
          },
          withholding_tax: {
            WITHHOLDING_TAX_1:
              'Withheld directly by the broker',
            WITHHOLDING_TAX_2:
              'Must be paid by the customer himself',
          },
        },
        checkbox: {
          image_type: {
            NONE: 'No Image',
            PRO: 'Pro',
            CONTRA: 'Contra',
          },
        },
        order_type: {
          type: {
            'Fill Or Kill (FOK)': 'Fill Or Kill (FOK)',
            'Limit Buy': 'Limit Buy',
            'Limit Order': 'Limit Order',
            'Limit Sell': 'Limit Sell',
            'Market Order': 'Market Order',
            'One Cancels Other (OCO)':
              'One Cancels Other (OCO)',
            'Stop Buy': 'Stop Buy',
            'Stop Sell': 'Stop Sell',
            Stoploss: 'Stoploss',
            'Stoploss (garantiert)':
              'Stoploss (garantiert)',
            'Take Profit': 'Take Profit',
            'Trailing Stop': 'Trailing Stop',
          },
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Broker',
      },
      view: {
        title: 'View Broker',
      },
      importer: {
        title: 'Import Brokers',
        fileName: 'broker_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    category: {
      name: 'category',
      label: 'All Categories',
      menu: 'Categories',
      exporterFileName: 'category_export',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category successfully saved',
      },
      update: {
        success: 'Category successfully saved',
      },
      destroy: {
        success: 'Category successfully deleted',
      },
      destroyAll: {
        success: 'Category(s) successfully deleted',
      },
      edit: {
        title: 'Edit Category',
      },
      fields: {
        id: 'Id',
        idRange: 'Id #',
        name: 'Surname',
        link: 'Link',
        title: 'Title',
        author: 'Author',
        teaser: 'Teaser',
        description: 'Description',
        target: 'Target',
        sort: 'Sort',
        activated: 'Activated',
        show_in_navigation: 'Show in navigation',
        show_in_footer: 'Show in the footer',
      },
      enumerators: {
        target: {
          _blank: 'New Window',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Category',
      },
      view: {
        title: 'View Category',
      },
      importer: {
        title: 'Import Categories',
        fileName: 'category_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    navigation: {
      name: 'navigation',
      label: 'Navigations',
      menu: 'Navigations',
      exporterFileName: 'navigation_export',
      list: {
        menu: 'Navigations',
        title: 'Navigations',
      },
      create: {
        success: 'Navigation successfully saved',
      },
      update: {
        success: 'Navigation successfully saved',
      },
      destroy: {
        success: 'Navigation successfully deleted',
      },
      destroyAll: {
        success: 'Navigation(s) successfully deleted',
      },
      edit: {
        title: 'Edit Navigation',
      },
      fields: {
        id: 'Id',
        idRange: 'Id #',
        name: 'Surname',
        link: 'Link',
        title: 'Title',
        target: 'Target',
        sort: 'Sort',
        activated: 'Activated',
        show_user_logged_in: 'Show when user is logged in',
        show_in_navigation: 'Show in the navigation',
        type: 'Type',
        parent: 'Parent Navigation',
      },
      enumerators: {
        target: {
          _blank: 'New Window',
        },
        type: {
          NONE: 'None',
          FOREX_SCHOOL: 'Forex School',
          FOREX_STRATEGY: 'Forex Strategy',
          DOWNLOADS: 'Downloads',
          NEWS: 'News',
          OFFERS: 'Offers',
          MOST_READ: 'Most Read',
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Navigation',
      },
      view: {
        title: 'View Navigation',
      },
      importer: {
        title: 'Import Navigations',
        fileName: 'navigation_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    trackingParameter: {
      name: 'trackingParameter',
      label: 'All Tracking Parameters',
      menu: 'Tracking Parameters',
      exporterFileName: 'trackingParameter_export',
      list: {
        menu: 'Tracking Parameters',
        title: 'Tracking Parameters',
      },
      create: {
        success: 'Tracking Parameter successfully saved',
      },
      update: {
        success: 'Tracking Parameter successfully saved',
      },
      destroy: {
        success: 'Tracking Parameter successfully deleted',
      },
      destroyAll: {
        success:
          'Tracking Parameter(s) successfully deleted',
      },
      edit: {
        title: 'Edit Tracking Parameter',
      },
      fields: {
        id: 'Id',
        idRange: 'Id #',
        param: 'Parameter',
        value: 'Value',
        example: 'Example',
      },
      placeholders: {},
      hints: {},
      new: {
        title: 'New Tracking Parameter',
      },
      view: {
        title: 'View Tracking Parameter',
      },
      importer: {
        title: 'Import Tracking Parameters',
        fileName: 'trackingParameter_import_template',
        hint: 'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    manager: {
      label: 'Manager',
      description: 'Manager role access',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint: 'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  author: {
    menu: 'Authors',
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url: 'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Subscriptions',
    title: 'Subscriptions',

    free: {
      label: 'Free',
      price: '0',
      unit: '$',
    },
    growth: {
      label: 'Growth',
      price: '10',
      unit: '$',
    },
    enterprise: {
      label: 'Enterprise',
      price: '50',
      unit: '$',
    },

    pricingPeriod: 'month',
    current: 'Current Subscription',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    tenant: 'Tenant',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min: '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint: 'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  customViewer: {
    default: 'No Data',
    noData: 'No {0}',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
