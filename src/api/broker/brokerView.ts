import ApiResponseHandler from '../apiResponseHandler';
import BrokerService from '../../services/brokerService';

export default async (req, res, next) => {
  try {
    const payload = await new BrokerService(req).findByURL(
      req.body.url,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
