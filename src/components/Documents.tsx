interface Document {
  id: number;
  img: string;
  title: string;
  uploadLink: string;
  uploadStatus: string;
  uploadedImg: string;
}

const documents: Document[] = [
  {
    id: 1,
    img: "/images/document.svg",
    title: "Bank statement",
    uploadStatus: "No file uploaded",
    uploadLink: "+ Upload",
    uploadedImg: "/images/docNotUploaded-icon.svg",
  },
  {
    id: 2,
    img: "/images/document.svg",
    title: "Passport photo",
    uploadStatus: "text-doc.pdf",
    uploadLink: "+ Upload",
    uploadedImg: "/images/docUploaded-icon.svg",
  },
  {
    id: 3,
    img: "/images/document.svg",
    title: "Work identity card",
    uploadStatus: "No file uploaded",
    uploadLink: "+ Upload",
    uploadedImg: "/images/docNotUploaded-icon.svg",
  },
  {
    id: 4,
    img: "/images/document.svg",
    title: "Employment Letter",
    uploadStatus: "text-doc.pdf",
    uploadLink: "+ Upload",
    uploadedImg: "/images/docUploaded-icon.svg",
  },
  {
    id: 5,
    img: "/images/document.svg",
    title: "Government issued identity card",
    uploadStatus: "No file uploaded",
    uploadLink: "+ Upload",
    uploadedImg: "/images/docNotUploaded-icon.svg",
  },

  {
    id: 6,
    img: "/images/document.svg",
    title: "Utility bill",
    uploadStatus: "text-doc.pdf",
    uploadLink: "+ Upload",
    uploadedImg: "/images/docUploaded-icon.svg",
  },
];

const Documents = () => {
  return (
    <div className="grid grid-cols-2 w-[80%] gap-4 px-4 mt-8 min-h-32 text-[0.85rem]">
      {documents.map((document) => {
        return (
          <div key={document.id} className="bg-[#f5f5f5] rounded-[0.3rem] py-1.5 px-4 m-4">
            <div className="flex justify-between border-b border-b-gray-200 pb-2 font-semibold">
              <span className="flex items-center">
                {" "}
                <img 
                  src={document.img}
                  className="w-3 mr-[0.3rem]"
                  alt="document icon"
                />
                <span>{document.title}</span>
              </span>
              <label className="text-[#51a4fb] underline cursor-pointer">
                {document.uploadLink}
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex mt-2 items-center">
              <img
                className="w-3 mr-[0.3rem]"
                src={document.uploadedImg}
                alt=""
              />
              <span>{document.uploadStatus}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Documents;
