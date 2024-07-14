// connect DB
mongoose.connect("mongodb://localhost/pcat-test-db");

//create a Photo
// Photo.create({
//   title: "Photo Title 2",
//   description: "Photo description 2 lorem ipsum",
// });

//read a Photo
// Photo.find({})
//   .then(photos => {
//     console.log(photos)})
//   .catch(err =>{
//     console.error("Hata:", err);
// });

//update a Photo
// const id = "66916dbe08a5d8363f965a61";
// async function updateData() {
//   await Photo.findOneAndUpdate(
//     { _id: id },
//     {
//       title: "Photo Title 4 ",
//       description: "Photo Description 4 lorem ipsum",
//     },
//     { new: true }
//   );
//   (err, data) => {
//     console.log(data);
//   };
// }
// updateData();

//delete a photo
// const idDel = "66916dbe08a5d8363f965a61";
// const deletePhoto = async () => {
//   try {
//     const deletePhoto = await Photo.findByIdAndDelete(idDel);
//     if (!deletePhoto) {
//       console.log("Photo is not removed");
//     } else {
//       console.log("Photo is removed");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// deletePhoto();
