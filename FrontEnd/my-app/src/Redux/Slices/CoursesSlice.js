import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  courseData: [],
};

export const getAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async () => {
    try {
      const response = await axios.get("http://localhost:5555/course");
      toast.success("Successfully fetched the data!");
      return response.data.Courses;
    } catch (error) {
      toast.error("Fail to fetch the Course");
    }
  }
);

export const CreateCourse = createAsyncThunk("/course/createCourse", async ({title,description,createdBy,category}) => {
  try {
    const Result = await axios.post("http://localhost:5555/course/", {
      title,
      description,
      createdBy,
      category,
    });

    toast.promise(Result, {
      loading: "Wait Creating your course",
      success: "successfully Course Created",
      error: "Fail to Create Your Course",
    });

    return (await Result).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action?.payload) {
        // console.log("PAYLOAD -->",action.payload) // data received successfully
        state.courseData = [...action.payload];
        console.log("COURSEDATA-->", state.courseData); // here also data receive successfully.
      }
    });
  },
});

export const {} = CoursesSlice.actions;
export default CoursesSlice.reducer;
