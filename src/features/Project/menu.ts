export interface Menu {
  name: string;
  url: string;
}

export const munuList: Menu[] = [
  {
    name: "Overview",
    url: "/project/overview",
  },
  {
    name: "List",
    url: "/project/list",
  },
  {
    name: "Boards",
    url: "/project/boards",
  },
  {
    name: "Chronology",
    url: "/project/chronology",
  },
  {
    name: "Calendar",
    url: "/project/calendar",
  },
  {
    name: "Members",
    url: "/project/members",
  },
  {
    name: "Channels",
    url: "/project/channels",
  },
  {
    name: "Files",
    url: "/project/files",
  },
];
