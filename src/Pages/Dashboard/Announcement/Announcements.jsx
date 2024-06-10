import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AnnouncementCard from "../../../components/AnnouncementCard";

const Announcements = () => {
  const axiosSecure = useAxiosSecure();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const { data: announcements = [] } = useQuery({
    queryKey: "announcements",
    queryFn: async () => {
      const res = await axiosSecure.get("/announcement");
      return res.data;
    },
  });

  const totalAnnouncements = announcements.length;
  const totalPages = Math.ceil(totalAnnouncements / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalAnnouncements);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-cols-2 items-center justify-center gap-10">
      {announcements.slice(startIndex, endIndex).map((announcement) => (
        <AnnouncementCard key={announcement._id} announcement={announcement} />
      ))}

      <div className="pagination mx-auto">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`btn ${
              i + 1 === currentPage ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
