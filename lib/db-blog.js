import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";
/////////////
// GET

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("blog_12")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getCabinPrice(id) {
  const { data, error } = await supabase
    .from("blog_12")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getBlogs = async function () {
  const { data, error } = await supabase
    .from("blog_12")
    .select("*")


  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};
