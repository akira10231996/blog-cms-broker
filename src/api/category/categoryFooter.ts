import ApiResponseHandler from '../apiResponseHandler';
import CategoryService from '../../services/categoryService';

export default async (req, res, next) => {
  try {
    const payload = await new CategoryService(
      req,
    ).findAndCountAll({
      filter: { show_in_footer: true },
      orderBy: 'sort_asc',
    });

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
