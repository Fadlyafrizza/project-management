import { Button } from "./ui/button";

import menus from "@/data/menus.json";

import {
  Search,
  SquarePen,
  Home,
  Inbox,
  Briefcase,
  Users,
  Lightbulb,
  LayoutDashboard,
  Ellipsis,
  Plus,
} from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ReactElement, useState } from "react";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { slugigy } from "@/lib/utils";

const iconMap = {
  Home,
  Inbox,
  Briefcase,
  Users,
  Lightbulb,
  LayoutDashboard,
  Ellipsis,
};

interface NavIconProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
  className?: string;
}

function NavIcon({
  icon,
  label,
  active,
  href = "#",
  className = "",
}: NavIconProps) {
  const activeClass = active ? "bg-mist-100 text-black" : "";

  return (
    <div
      className={`${activeClass} p-2 hover:bg-mist-100 transition-all duration-200`}
    >
      <a href={href} className={`flex text-sm gap-2 items-center ${className}`}>
        {icon}
        {label}
      </a>
    </div>
  );
}

function ProjectSidebar() {
  const { menu } = menus;

  return (
    <aside className="w-80 bg-white h-full border-r border-gray-200">
      <div className="p-4 flex flex-col">
        <div className="space-y-2">
          <h2 className="font-medium px-2 text-gray-700 tracking-wide">
            Projects
          </h2>
          <div id="actions" className="flex space-x-2">
            <div className="relative w-full">
              <div className="text-zinc-800 absolute left-2 top-1/2 -translate-y-1/2">
                <SquarePen size={18} />
              </div>
              <Button
                className="justify-start pl-8 w-full font-normal text-sm cursor-pointer"
                variant={"outline"}
              >
                New work item
              </Button>
            </div>
            <div>
              <Button className="w-9 cursor-pointer" aria-label="Submit" variant="outline">
                <Search />
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-8">
          <nav className="flex flex-col space-y-2">
            {menu.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <NavIcon
                  key={item.label}
                  icon={<Icon size={18} />}
                  label={item.label}
                />
              );
            })}
          </nav>
        </div>
        <div className="px-2 space-y-4">
          <h1 className="font-semibold text-gray-400">Teamspaces</h1>
          <div>
            <span className="text-sm">🔍 Marketing</span>
          </div>
        </div>
        <div className="px-2 pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-400">Projects</h1>
            <AddProjectDialogForm>
              <Button className="cursor-pointer" variant="ghost">
                <Plus size={8} />
              </Button>
            </AddProjectDialogForm>
          </div>
          <div className="flex flex-col space-y-4">
            {/* <h1 className="text-sm">🚀 Auto-campaigns launch</h1>
            <div className="flex flex-col space-y-1 text-xs">
              <NavIcon
                icon={<Layers size={18} />}
                label="Work Items"
                active={true}
                className="pl-4"
              />
              <NavIcon
                icon={<Circle size={18} />}
                label="Cycles"
                className="pl-4"
              />
            </div> */}
          </div>
        </div>
      </div>
    </aside>
  );
}

function AddProjectDialogForm({ children }: { children: ReactElement }) {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    const token = localStorage.getItem('token')

    if (!token) return console.error('Token not found')

    // axios({
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   },
    //   url: 'https://pm-tools-api.kehosting.in/api/projects',
    //   data: {
    //     name,
    //     description: desc,
    //     key: name.toUpperCase().replace(/\s/g, '')
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // }).catch(err => {
    //   setError(err.response.data.error)
    // }).finally(() => {
    //   setLoading(false)
    // })

    try {
      const response = await axios.post('https://pm-tools-api.kehosting.in/api/projects', {
        name,
        description: desc,
        key: slugigy(name)
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)

    } catch (error) {
      console.dir()
      setError("Error Cuy")
    }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
          <DialogDescription>
            z  </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup  >
            <Field>
              <FieldLabel htmlFor="project-name" >Project Name</FieldLabel>
              <Input onChange={(e) => setName(e.target.value)} id="project-name" name="name" placeholder="Input Project Name" />
            </Field>
            <Field>
              <FieldLabel htmlFor="description">Description Name</FieldLabel>
              <Textarea onChange={(e) => setDesc(e.target.value)} id="description" name="description" placeholder="Description Project" />
            </Field>
          </FieldGroup>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" size={"sm"}>Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit} size="sm">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default ProjectSidebar;
