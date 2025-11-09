
import Image from "next/image";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { ImagePlus } from "lucide-react";
import { FiTrash2 } from "react-icons/fi";
import { HiAtSymbol } from "react-icons/hi";
import { stackType } from "@/types/portfolio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoIosArrowDown } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import fileToBase64 from "@/functions/fileToBase64";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import portfolioState from "@/zustand/persit/addPortfolio";
import { AiFillInstagram, AiFillTikTok  } from "react-icons/ai";
import { FaGitlab, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import useLoadingState from "@/zustand/non-persist/loadingState";
import { FaGithub, FaQuora, FaYoutube, FaDiscord  } from "react-icons/fa";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"; 
import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogTrigger, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerTitle,  DrawerFooter, DrawerHeader, DrawerTrigger, DrawerContent, DrawerDescription } from "@/components/ui/drawer";


const SocialDrawer = () => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const { profile , setProfile} = portfolioState();
  const isDesktop = useMediaQuery("(min-width: 768px)")
  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30">
          <div className="flex justify-between border rounded-xl items-center shadow-sm py-6 px-4">
            <div className="flex gap-2 item-center font-semibold text-[18px]">
              <HiAtSymbol size={25}/>
              <p>Add Socials</p>
            </div>

            <IoIosArrowDown />
          </div>
        </DialogTrigger>

        <DialogContent className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <DialogTitle>Socials</DialogTitle> 
          </DialogHeader>

          <div className="flex flex-col gap-4 overflow-y-scroll scrollbar">
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Git Hub</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaGithub /> 
                </Button>
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.github ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, github: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Git Lab</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaGitlab /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.gitlab ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, gitlab: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">LinkedIn</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaLinkedin /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.linkedin ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, linkedin: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Website</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <BsGlobe /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.website ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, website: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Twitter</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaXTwitter /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.x ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, x: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Quora</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaQuora /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.quora ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, quora: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Youtube</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaYoutube /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.youtube ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, youtube: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Discord</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaDiscord /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.discord ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, discord: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Instagram</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <AiFillInstagram /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.instagram ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, instagram: e.target.value}})}}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">TikTok</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <AiFillTikTok /> 
                </Button>
                
                <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.tiktok ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, tiktok: e.target.value}})}}/>
              </div>
            </Label>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="cursor-pointer hover:bg-Grey/30">
        <div className="flex justify-between border rounded-xl items-center shadow-sm p-4">
          <div className="flex gap-2 item-center font-semibold text-[18px]">
            <HiAtSymbol size={25}/>
            <p>Add Socials</p>
          </div>

          <IoIosArrowDown />
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 m-0 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="text-left p-0">
          <DrawerTitle>Socials</DrawerTitle> 
        </DrawerHeader>
        

        <div className="flex flex-col gap-4 px-4 overflow-y-scroll scrollbar">
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Git Hub</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaGithub /> 
              </Button>
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.github ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, github: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Git Lab</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaGitlab /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.gitlab ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, gitlab: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">LinkedIn</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaLinkedin /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.linkedin ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, linkedin: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Website</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <BsGlobe /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.website ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, website: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Twitter</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaXTwitter /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.x ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, x: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Quora</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaQuora /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.quora ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, quora: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Youtube</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaYoutube /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.youtube ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, youtube: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Discord</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaDiscord /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.discord ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, discord: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Instagram</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <AiFillInstagram /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.instagram ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, instagram: e.target.value}})}}/>
            </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">TikTok</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <AiFillTikTok /> 
              </Button>
              
              <Input className="text-[14px]" disabled={isLoading} value={profile.socials?.tiktok ?? ""} onChange={(e) => {setProfile({...profile, socials: {...profile.socials, tiktok: e.target.value}})}}/>
            </div>
          </Label>
        </div>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Done</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const StackDrawer = () => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const { profile , setProfile} = portfolioState();
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const StackIcon = ({ stack, idx }:{ stack: stackType, idx:number }) => {
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
        if (file) {
            const base64 = await fileToBase64(file);
            const updatedStacks = (profile.stacks ?? []).map((s, i) =>
          i === idx ? { ...s, icon: base64 } : s
        );
        setProfile({ ...profile, stacks: updatedStacks });
      }
    };
  
    const showImage = stack.icon instanceof File || (typeof stack.icon === "string" && stack.icon !== "");

    return (
      <div className="flex flex-col gap-1 items-center">
        { showImage ?
          <Label>
            <Image src={stack.icon instanceof File ? URL.createObjectURL(stack.icon) : (stack.icon ?? "")} alt={`${stack.name} icon`} width={40} height={36} className="rounded-[8px] cursor-pointer max-h-9 max-w-10"/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange}  className="absolute size-full hidden" />
          </Label> 
          :
          <Label className="h-9 w-10 bg-gray-100 rounded-[8px] border flex items-center justify-center relative cursor-pointer">
            <ImagePlus size={16}/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="absolute size-full hidden" />
          </Label>
        }
      </div>
    )
  }

  const addNewStack = () => {
    setProfile({...profile, stacks: [...profile.stacks ?? [], {name: "", icon: ""}] });
  }

  const removeStack = (idx: number) => {
    setProfile({...profile, stacks: profile.stacks?.filter((_, index) => index !== idx)})
  }

  const handleStackChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedStacks = (profile.stacks ?? []).map((s, i) =>
      i === idx ? { ...s, name: e.target.value } : s
    );
    setProfile({ ...profile, stacks: updatedStacks });
  }

  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30">
          <div className="flex justify-between border rounded-xl items-center shadow-sm py-6 px-4">
            <div className="flex gap-2 item-center font-semibold text-[18px]">
              <LuBrainCircuit size={25}/>
              <p>Add Stack</p>
            </div>

            <IoIosArrowDown />
          </div>
        </DialogTrigger>

        <DialogContent showCloseButton={false} className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle>Stacks</DialogTitle> 
              <Button onClick={addNewStack} className="cursor-pointer"><IoAdd /></Button>
            </div>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 overflow-y-scroll scrollbar"> 
            {profile.stacks?.map((stack, idx) =>
              <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
                <div className="flex gap-2 items-center w-full">
                  <StackIcon stack={stack} idx={idx}/>
                  <Input className="text-[14px]" disabled={isLoading} value={stack.name ?? ""} onChange={(e) => handleStackChange(e, idx)}/>
                  <Button onClick={()=> removeStack(idx)} className="cursor-pointer"><FiTrash2 /></Button>
                </div>
              </Label> 
            )}
          </div>

          <DialogFooter>
            <DialogClose asChild>
            <Button className="flex w-full cursor-pointer">Done</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }


  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="cursor-pointer hover:bg-Grey/30">
        <div className="flex justify-between border rounded-xl items-center shadow-sm p-4">
          <div className="flex gap-2 item-center font-semibold text-[18px]">
            <LuBrainCircuit size={25}/>
            <p>Add Stack</p>
          </div>

          <IoIosArrowDown />
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="py-0">
          <div className="flex justify-between items-center">
            <DialogTitle>Stacks</DialogTitle> 
            <Button onClick={addNewStack} className="cursor-pointer"><IoAdd /></Button>
          </div>
        </DrawerHeader>

        <div className="flex flex-col gap-4 py-2 px-4 overflow-y-scroll scrollbar"> 
          {profile.stacks?.map((stack, idx) =>
            <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
              <div className="flex gap-2 items-center w-full">
                <StackIcon stack={stack} idx={idx}/>
                <Input className="text-[14px]" disabled={isLoading} value={stack.name ?? ""} onChange={(e) => handleStackChange(e, idx)}/>
                <Button onClick={()=> removeStack(idx)} className="cursor-pointer"><FiTrash2 /></Button>
              </div>
            </Label> 
          )}
        </div>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const ProfileTab = () => {
  const { isLoading } = useLoadingState();
  const { profile , setProfile} = portfolioState();

  const ProfilePhoto = () => {
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const base64 = await fileToBase64(file);
        setProfile({ ...profile, profileImage: base64 });
      }
    };
  
    const showImage = profile.profileImage instanceof File || (typeof profile.profileImage === "string" && profile.profileImage !== "");

    return (
      <div className="flex flex-col gap-1 items-center">
        <p className="font-medium text-[14px]">Photo</p> 
        { showImage ?
          <Label>
            <Image src={profile.profileImage instanceof File ? URL.createObjectURL(profile.profileImage) : (profile.profileImage ?? "")} alt="profile" width={128} height={128} className="rounded-full cursor-pointer max-h-32 max-w-32"/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange}  className="absolute size-full hidden" />
          </Label> 
          :
          <Label className="size-32 bg-gray-100 rounded-full flex items-center justify-center relative cursor-pointer">
            <ImagePlus size={20}/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="absolute size-full hidden" />
          </Label>
        }
      </div>
    )
  }

  return(
    <TabsContent value="profile" className="flex flex-col gap-3 py-2 px-1 sm:px-0">
      <h2 className="font-semibold text-2xl">Edit Profile</h2>

      <div className="flex flex-col gap-4 items-center md:flex-row-reverse">
        <ProfilePhoto />

        <div className="flex flex-col gap-4 w-full">
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">First Name</p>
            <Input className="text-[14px]" disabled={isLoading} value={profile.firstName ?? ""} onChange={(e) => {setProfile({...profile, firstName: e.target.value})}}/>
          </Label>

          <Label className="flex flex-col gap-2 items-start min-w-full w-full">
            <p className="whitespace-nowrap">Last Name</p>
            <Input className="text-[14px]" disabled={isLoading} value={profile.lastName ?? ""} onChange={(e) => {setProfile({...profile, lastName: e.target.value})}}/>
          </Label>
        </div>
      </div>

      <Label className="flex flex-col gap-2 items-start min-w-full ">
        <p className="whitespace-nowrap">Email</p>
        <Input className="text-[14px]" disabled={isLoading} value={profile.email ?? ""} onChange={(e) => {setProfile({...profile, email: e.target.value})}} />
      </Label>

      <Label className="flex flex-col gap-2 items-start min-w-full ">
        <p className="whitespace-nowrap">Phone</p>
        <Input className="text-[14px]" disabled={isLoading} value={profile.phone ?? ""} onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '') }} onChange={(e) => {setProfile({...profile, phone: e.target.value})}}/>
      </Label>

      <Label className="flex flex-col gap-2 items-start min-w-full ">
        <p className="whitespace-nowrap">Location</p>
        <Input className="text-[14px]" disabled={isLoading} value={profile.location ?? ""} onChange={(e) => {setProfile({...profile, location: e.target.value})}}/>
      </Label>

      <Label className="flex flex-col gap-2 items-start min-w-full">
        <p className="whitespace-nowrap">Description</p>
        <Textarea className="h-30 text-[14px]" disabled={isLoading} value={profile.description ?? ""} onChange={(e) => {setProfile({...profile, description: e.target.value})}} />
      </Label>

      <Separator className="my-4 py-0.5 rounded" />

      <SocialDrawer />

      <StackDrawer />
      
    </TabsContent>
  )
}

const Fields = () => {
  return (
    <div className="flex w-full min-w-1/2 overflow-y-auto scrollbar">
      <Tabs defaultValue="profile" className="overflow-hidden">
        <div className="flex items-center overflow-x-scroll scrollbar overflow-y-hidden py-3">
          <TabsList >
            <TabsTrigger className="cursor-pointer" value="profile">Profile</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="about">About</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="projects">Projects</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="experience">Experience</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="newsletter">Newsletter</TabsTrigger>
          </TabsList>
        </div>

        <div className="overflow-y-scroll scrollbar">
          <ProfileTab />
        </div>
      </Tabs>
    </div>
  )
}

export default Fields