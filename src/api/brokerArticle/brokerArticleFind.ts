import ApiResponseHandler from '../apiResponseHandler';
import BrokerArticleService from '../../services/brokerArticleService';
import PermissionChecker from '../../services/user/permissionChecker';
import Permissions from '../../security/permissions';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.brokerArticleRead,
    );

    const payload = await new BrokerArticleService(
      req,
    ).findById(req.params.id);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
