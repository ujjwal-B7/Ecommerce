import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProducts,
  getSingleProductDetails,
} from "../store/actions/productAction";
import { useNavigate, useParams } from "react-router-dom";
import { EDIT_PRODUCT_RESET } from "../store/constants/productConstants";
const EditProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isUpdated } = useSelector(
    (state) => state.updateProduct
  );
  const { product } = useSelector((state) => state.productDetails);
  const [name, setName] = useState(product.name);
  const [Stock, setStock] = useState(product.Stock);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [images, setImages] = useState();
  const [imagesPreview, setImagesPreview] = useState(product.images);
  const categories = ["Footwear", "Bottom", "Tops", "Attire"];

  // name create function
  const productSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("Stock", Stock);
    myForm.set("description", description);
    myForm.set("price", price);
    myForm.set("category", category);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProducts(id, myForm));
  };

  const productOnChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    dispatch(getSingleProductDetails(id));
    if (error) {
      dispatch(clearErrors());
    }
    if (isUpdated) {
      dispatch({ type: EDIT_PRODUCT_RESET });
      navigate("/admin/dashboard");
    }
  }, [dispatch, error, isUpdated]);
  return (
    <div className="col-start-3 col-end-13 mt-20 w-full h-screen bg-admin rounded-lg mx-auto">
      <form
        onSubmit={productSubmit}
        encType="multipart/form-data"
        className="lg:w-[50%] mx-auto mt-5 px-4 py-2"
      >
        <h1 className="text-center font-semibold text-xl py-2">Edit Product</h1>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Product Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product name"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Desciption
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Category
          </label>
          <select
            value={category}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Product Quantity
          </label>
          <input
            type="number"
            value={Stock}
            onChange={(e) => setStock(e.target.value)}
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Quantity"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price"
            required
          />
        </div>
        <label htmlFor="images" className="text-gray-900">
          Upload a photo
        </label>
        <div id="registerImage" className="flex items-center gap-7">
          <div className="pic ">
            <input
              className="rounded-xl"
              multiple
              type="file"
              name="images"
              accept="image/*"
              onChange={productOnChange}
            />
          </div>
          <div className=" h-12 w-12 flex gap-2 mb-2">
            {imagesPreview && imagesPreview.map((image, index) => (
              <img
                className="rounded-full h-12 w-12 object-cover"
                src={image.url}
                key={index}
                alt=""
              />
            ))}
          </div>
          <div className=" h-12 w-12 flex gap-2 mb-2">
            {images && images.map((image, index) => (
              <img
                className="rounded-full h-12 w-12 object-cover"
                src={image}
                key={index}
                alt=""
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
        >
          {loading && <span className="loader-btn  absolute left-[55%]"></span>}
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProducts;
