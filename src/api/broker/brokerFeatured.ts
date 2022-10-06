import ApiResponseHandler from '../apiResponseHandler';
import BrokerService from '../../services/brokerService';

export default async (req, res, next) => {
  try {
    const payload = await new BrokerService(
      req,
    ).findAndCountAll({
      filter: {
        featured_broker: true,
        activated: true,
      },
      orderBy: 'broker_rating.overall_rating_desc',
    });

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
