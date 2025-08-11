export const events = {
  upcoming: [
    {
      title: "Simulation-Driven Design for Water & Wastewater Treatment Processes",
      date: "21–22 August, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Seminar Hall, WRDM, IIT Roorkee",
      description: "A comprehensive 2-day workshop focusing on computational fluid dynamics applications in environmental engineering using ANSYS. Participants will gain hands-on experience with real-world case studies.",
      image: "/images/events/Poster.jpg",
      registerLink: "/register/cfd-ansys-2025",
      speakers: [
        {
          name: "Dr. John Smith",
          affiliation: "Professor, Environmental Engineering",
          photo: "/images/speakers/john-smith.jpg"
        },
        {
          name: "Dr. Sarah Johnson",
          affiliation: "Senior CFD Engineer, ANSYS Inc.",
          photo: "/images/speakers/sarah-johnson.jpg"
        }
      ],
      agenda: "/downloads/cfd-workshop-agenda.pdf",
      prerequisites: "Basic knowledge of fluid mechanics and numerical methods recommended"
    },
  ],
  past: [
    {
      title: "Research Scholars Day 2025",
      date: "15 April 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium, University Campus",
      description: "An annual event showcasing cutting-edge research and innovations by our scholars. Featured 15 presentations across various disciplines with keynote addresses from leading experts.",
      image: "/images/events/research-day-2025.jpg",
      photos:[
        '/images/research/invited_talk/IT1(1).JPG','/images/research/invited_talk/IT1(2).JPG','/images/research/invited_talk/IT1(3).JPG','/images/research/invited_talk/IT1(4).JPG','/images/research/invited_talk/IT1(5).JPG'],
      youtubeLinks: {
        inauguration: "https://youtube.com/watch?v=xyz123",
        lecture: "https://youtube.com/watch?v=abc456",
        valedictory: "https://youtube.com/watch?v=def789"
      },
      highlights: [
        "Keynote by Nobel Laureate Dr. Emily Chen",
        "Best Paper Award presentations",
        "Poster competition with 25 participants"
      ],
      report: "/downloads/research-day-2025-report.pdf"
    },
    {
      title: "CFD Modelling Workshop: FLOW-3D for Water Systems",
      date: "16–17 April, 2025",
      time: "8:30 AM - 6:00 PM",
      location: "Computer Lab 4, Engineering Building",
      description: "Intensive hands-on training focused on practical computational fluid dynamics applications for water systems using FLOW-3D software. Covered turbulence modeling, multiphase flows, and environmental applications.",
      image: "/images/events/flow3d-workshop.jpg",
      photos: [
        "/images/gallery/cfd-workshop-1.jpg",
        "/images/gallery/cfd-workshop-2.jpg",
        "/images/gallery/cfd-workshop-3.jpg"
      ],
      youtubeLinks: {
        inauguration: "https://youtube.com/watch?v=ghi012",
        lecture: "https://youtube.com/watch?v=jkl345",
        valedictory: "https://youtube.com/watch?v=mno678"
      },
      participants: 42,
      materials: {
        slides: "/downloads/cfd-workshop-slides.zip",
        datasets: "/downloads/cfd-workshop-datasets.zip"
      }
    },
  ],
};
