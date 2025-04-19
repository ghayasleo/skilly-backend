import Recommendation from "../models/recommendation";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync";
import responseBody from "../utils/responseBody";

export const recommendCareerPath = catchAsync(async (req, _) => {
  const userId = req.user._id;

  const { careerPath } = req.body;
});

export const getAllCareerPaths = catchAsync(async () => null);
