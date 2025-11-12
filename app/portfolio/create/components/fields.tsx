
import Image from "next/image";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { ImagePlus } from "lucide-react";
import { FiTrash2 } from "react-icons/fi";
import { HiAtSymbol } from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDownIcon } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import fileToBase64 from "@/functions/fileToBase64";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";
import portfolioState from "@/zustand/persit/addPortfolio";
import { AiFillInstagram, AiFillTikTok  } from "react-icons/ai";
import useLoadingState from "@/zustand/non-persist/loadingState";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; 
import { FaGitlab, FaLinkedin, FaXTwitter, FaLaptopCode  } from "react-icons/fa6";
import { FaGithub, FaQuora, FaYoutube, FaDiscord, FaChess, FaLink  } from "react-icons/fa";
import { experienceType, projectType, stackType, testimonialType } from "@/types/portfolio";
import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerTitle,  DrawerFooter, DrawerHeader, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

// PROFILE TAB
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
            <div className="flex gap-2 items-center font-semibold text-[18px]">
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
          <div className="flex gap-2 items-center font-semibold text-[18px]">
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
          i === idx ? { ...s, icon: { url:base64 } } : s
        );
        setProfile({ ...profile, stacks: updatedStacks });
      }
    };
  
    const showImage = stack.icon.url !== undefined && stack.icon.url !== "";

    return (
      <div className="flex flex-col gap-1 items-center">
        { showImage ?
          <Label>
            <Image src={stack?.icon?.url ? stack?.icon?.url : ""} alt={`${stack.name} icon`} width={40} height={36} className="rounded-[8px] cursor-pointer max-h-9 max-w-10"/>
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
    setProfile({...profile, stacks: [...profile.stacks ?? [], {name: "", icon: { url:"" }}] });
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
            <div className="flex gap-2 items-center font-semibold text-[18px]">
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

          <div className="flex flex-col gap-4 py-2 px-1 overflow-y-scroll scrollbar"> 
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
          <div className="flex gap-2 items-center font-semibold text-[18px]">
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
            <Button>Done</Button>
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
        setProfile({ ...profile, profileImage: { url: base64 } });
      }
    };
  
    const showImage = profile.profileImage?.url !== undefined && profile.profileImage?.url !== "";

    return (
      <div className="flex flex-col gap-1 items-center">
        <p className="font-medium text-[14px]">Photo</p> 
        { showImage ?
          <Label>
            <Image src={profile?.profileImage?.url ? profile?.profileImage?.url : ""} alt="profile" width={128} height={128} className="rounded-xl cursor-pointer max-h-32 max-w-32"/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange}  className="absolute size-full hidden" />
          </Label> 
          :
          <Label className="size-32 bg-gray-100 border rounded-xl flex items-center justify-center relative cursor-pointer">
            <ImagePlus size={20}/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="absolute size-full hidden" />
          </Label>
        }
      </div>
    )
  }

  return(
    <TabsContent value="profile" className="flex flex-col gap-3 py-2 px-1">
      <h2 className="font-semibold text-2xl">Edit Profile</h2>

      <div className="flex flex-col gap-4 items-center md:flex-row-reverse">
        <ProfilePhoto />

        <div className="flex flex-col gap-4 w-full">
          <Label className="flex flex-col gap-2 items-start">
            <p className="whitespace-nowrap">First Name</p>
            <Input className="text-[14px]" disabled={isLoading} value={profile.firstName ?? ""} onChange={(e) => {setProfile({...profile, firstName: e.target.value})}}/>
          </Label>

          <Label className="flex flex-col gap-2 items-start">
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

      <StackDrawer />

      <SocialDrawer />
      
    </TabsContent>
  )
}

// ABOUT TAB
const InterestDrawer = () => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const { about , setAbout} = portfolioState();
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const addNewInterest = () => {
    setAbout({...about, interests: [...about.interests ?? [], ""] });
  }

  const removeInterest = (idx: number) => {
    setAbout({...about, interests: about.interests?.filter((_, index) => index !== idx)})
  }

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const updatedInterests = (about.interests ?? []).map((interest, i) => i === idx ?  e.target.value : interest );
    setAbout({ ...about, interests: updatedInterests });
  }

  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30 w-full">
          <div className="flex justify-between border rounded-xl items-center shadow-sm py-6 px-4">
            <div className="flex gap-2 items-center font-semibold text-[18px]">
              <FaChess size={25}/>
              <p>Add Interest</p>
            </div>

            <IoIosArrowDown />
          </div>
        </DialogTrigger>

        <DialogContent showCloseButton={false} className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle>Interest</DialogTitle> 
              <Button onClick={addNewInterest} className="cursor-pointer"><IoAdd /></Button>
            </div>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 px-1 overflow-y-scroll scrollbar"> 
            {about.interests?.map((i, idx) =>
              <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
                <div className="flex gap-2 items-center w-full">
                  <Input className="text-[14px]" disabled={isLoading} value={i ?? ""} onChange={(e) => handleInterestChange(e, idx)}/>
                  <Button onClick={()=> removeInterest(idx)} className="cursor-pointer"><FiTrash2 /></Button>
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
      <DrawerTrigger asChild className="cursor-pointer hover:bg-Grey/30 w-full">
        <div className="flex justify-between border rounded-xl items-center shadow-sm p-4">
          <div className="flex gap-2 items-center font-semibold text-[18px]">
            <FaChess size={25}/>
            <p>Add Interest</p>
          </div>

          <IoIosArrowDown />
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="py-0">
          <div className="flex justify-between items-center">
            <DialogTitle>Interest</DialogTitle> 
            <Button onClick={addNewInterest} className="cursor-pointer"><IoAdd /></Button>
          </div>
        </DrawerHeader>

        <div className="flex flex-col gap-4 py-2 px-4 overflow-y-scroll scrollbar"> 
          {about.interests?.map((i, idx) =>
            <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
              <div className="flex gap-2 items-center w-full">
                <Input className="text-[14px]" disabled={isLoading} value={i ?? ""} onChange={(e) => handleInterestChange(e, idx)}/>
                <Button onClick={()=> removeInterest(idx)} className="cursor-pointer"><FiTrash2 /></Button>
              </div>
            </Label> 
          )}
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

const AboutTab  = () => {
  const { isLoading } = useLoadingState();
  const { about , setAbout} = portfolioState();

  const AboutPhoto = () => {
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const base64 = await fileToBase64(file);
        setAbout({ ...about, image: { url: base64 } });
      }
    };
  
    const showImage = about.image?.url !== undefined && about.image?.url !== "";

    return (
      <div className="flex flex-col gap-1 items-center">
        <p className="font-medium text-[14px]">Photo</p> 
        { showImage ?
          <Label>
            <Image src={about?.image?.url ? about?.image?.url : ""} alt="profile" width={128} height={128} className="rounded-xl cursor-pointer max-h-32 max-w-32"/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange}  className="absolute size-full hidden" />
          </Label> 
          :
          <Label className="size-32 bg-gray-100 border rounded-xl flex items-center justify-center relative cursor-pointer">
            <ImagePlus size={20}/>
            <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="absolute size-full hidden" />
          </Label>
        }
      </div>
    )
  }

  return (
    <TabsContent value="about" className="flex flex-col gap-4 py-2 px-1">
      <h2 className="font-semibold text-2xl">More About You</h2>

      <AboutPhoto />

      <Label className="flex flex-col gap-2 items-start min-w-full">
        <p className="whitespace-nowrap font-semibold">About You</p>
        <Textarea className="h-20 text-[14px]" disabled={isLoading} value={about.bio ?? ""} onChange={(e) => {setAbout({...about, bio: e.target.value})}} />
      </Label>

      <InterestDrawer />

    </TabsContent>
  )
}


//PROJECTS TAB
const TechDrawer = ({ idx, project }: { idx:number, project: projectType}) => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const { projects , setProjects} = portfolioState();
  const isDesktop = useMediaQuery("(min-width: 768px)")
  
  const addNewTechStack = () => {
    const updatedProjects = projects.map((p, i) => i === idx ? { ...p, technologies: [...(p.technologies ?? []), ""] } : p );
    setProjects(updatedProjects);
  };
  
  const removeTechStack = (techIdx: number) => {
    const updatedProjects = projects.map((p, i) => i === idx ? {...p, technologies: p.technologies?.filter((_, index) => index !== techIdx) ?? [] } : p);
    setProjects(updatedProjects);
  };
  
  const handleTechStackChange = (e: React.ChangeEvent<HTMLInputElement>, techIdx: number) => {
    const updatedTech = (project.technologies ?? []).map((tech, i) => i === techIdx ? e.target.value : tech );

    const updatedProjects = projects.map((p, i) => i === idx ? { ...p, technologies: updatedTech } : p );
    setProjects(updatedProjects);
  };

  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30 w-full">
          <div className="flex justify-between border rounded-[8px] items-center shadow-sm py-2 px-4">
            <div className="flex gap-2 items-center text-[14px] font-medium">
              <FaChess/>
              <p>Add Stack</p>
            </div>
            <IoIosArrowDown />
          </div>
        </DialogTrigger>

        <DialogContent showCloseButton={false} className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle>Stacks</DialogTitle> 
              <Button onClick={addNewTechStack} className="cursor-pointer"><IoAdd /></Button>
            </div>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 px-1 overflow-y-scroll scrollbar"> 
            {project.technologies?.map((i, idx) =>
              <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
                <div className="flex gap-2 items-center w-full">
                  <Input className="text-[14px]" disabled={isLoading} value={i ?? ""} onChange={(e) => handleTechStackChange(e, idx)}/>
                  <Button onClick={()=> removeTechStack(idx)} className="cursor-pointer"><FiTrash2 /></Button>
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
      <DrawerTrigger asChild className="cursor-pointer hover:bg-Grey/30 w-full">
        <div className="flex justify-between border rounded-[8px] items-center shadow-sm py-2 px-4">
          <div className="flex gap-2 items-center text-[14px] font-medium">
            <FaChess/>
            <p>Add Stack</p>
          </div>
          <IoIosArrowDown />
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="py-0">
          <div className="flex justify-between items-center">
            <DialogTitle>Stacks</DialogTitle> 
            <Button onClick={addNewTechStack} className="cursor-pointer"><IoAdd /></Button>
          </div>
        </DrawerHeader>

        <div className="flex flex-col gap-4 py-2 px-4 overflow-y-scroll scrollbar"> 
          {project.technologies?.map((i, idx) =>
            <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
              <div className="flex gap-2 items-center w-full">
                <Input className="text-[14px]" disabled={isLoading} value={i ?? ""} onChange={(e) => handleTechStackChange(e, idx)}/>
                <Button onClick={()=> removeTechStack(idx)} className="cursor-pointer"><FiTrash2 /></Button>
              </div>
            </Label> 
          )}
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

const ProjectsDrawer = ({ idx, project }: { idx:number, project: projectType}) => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const { projects , setProjects} = portfolioState();
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const removeProject = (idx: number) => {
    setProjects(projects.filter((_, index) => index !== idx))
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedProjects = projects.map((proj, i) =>
      i === idx ? { ...proj, name: e.target.value } : proj
    );
  
    setProjects(updatedProjects);
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
    const updatedProjects = projects.map((proj, i) =>
      i === idx ? { ...proj, description: e.target.value } : proj
    );
  
    setProjects(updatedProjects);
  }

  const handleChangeLiveLink = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedProjects = projects.map((proj, i) =>
      i === idx ? { ...proj, link: e.target.value } : proj
    );
  
    setProjects(updatedProjects);
  }

  const handleChangeRepoLink = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedProjects = projects.map((proj, i) =>
      i === idx ? { ...proj, github: e.target.value } : proj
    );
  
    setProjects(updatedProjects);
  }
  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30">
          <div className="flex justify-between border rounded-[8px] items-center shadow-sm p-2 pl-3">
            <div className="flex gap-2 items-center font-semibold text-[14px]"> 
              <p>Project {idx + 1}</p>
              <IoIosArrowDown />
            </div>
            <Button onClick={(e) => {e.stopPropagation(); removeProject(idx)}} className="cursor-pointer"> <FiTrash2 /> </Button>
          </div>
        </DialogTrigger>

        <DialogContent showCloseButton={false} className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <DialogTitle>Project {idx + 1}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 px-1 overflow-y-scroll scrollbar"> 
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Name</p>

              <Input className="text-[14px]" disabled={isLoading} value={project.name ?? ""} onChange={handleChangeName}/>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Live Link</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaLink /> 
                </Button>
                <Input className="text-[14px]" disabled={isLoading} value={project.link ?? ""} onChange={handleChangeLiveLink}/>
              </div>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">GitHub Link</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaGithub /> 
                </Button>
                <Input className="text-[14px]" disabled={isLoading} value={project.github ?? ""} onChange={handleChangeRepoLink}/>
              </div>
            </Label>

            <TechDrawer idx={idx} project={project}/>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Project Description</p> 

              <Textarea className="h-30 text-[14px]" disabled={isLoading} value={project.description ?? ""} onChange={handleChangeDescription} />
            </Label>
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
        <div className="flex justify-between border rounded-[8px] items-center shadow-sm p-2 pl-3">
          <div className="flex gap-2 items-center font-semibold text-[14px]"> 
            <p>Project {idx + 1}</p>
            <IoIosArrowDown />
          </div>
          <Button onClick={(e) => {e.stopPropagation(); removeProject(idx)}} className="cursor-pointer"> <FiTrash2 /> </Button>
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="py-0">
          <DialogTitle>Project {idx + 1}</DialogTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-4 py-2 px-4 overflow-y-scroll scrollbar"> 
          <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Name</p>

              <Input className="text-[14px]" disabled={isLoading} value={project.name ?? ""} onChange={handleChangeName}/>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Live Link</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaLink /> 
                </Button>
                <Input className="text-[14px]" disabled={isLoading} value={project.link ?? ""} onChange={handleChangeLiveLink}/>
              </div>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">GitHub Link</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaGithub /> 
                </Button>
                <Input className="text-[14px]" disabled={isLoading} value={project.github ?? ""} onChange={handleChangeRepoLink}/>
              </div>
          </Label>
          <TechDrawer idx={idx} project={project}/>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Project Description</p> 

              <Textarea className="h-30 text-[14px]" disabled={isLoading} value={project.description ?? ""} onChange={handleChangeDescription} />
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

const ProjectsTab =() => {
  const { projects , setProjects} = portfolioState();
  
  const  addNewProject = () => {
    setProjects([...projects, {} as projectType]);
  }

  return (
    <TabsContent value="projects" className="flex flex-col gap-3 py-2 px-1 overflow-y-auto scrollbar">
      <div className="flex justify-between items-center pr-2">
        <h2 className="font-semibold text-2xl">Projects</h2> 
        <Button onClick={addNewProject} className="cursor-pointer"><IoAdd /></Button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-scroll scrollbar">
        {projects.map((project,idx) => <ProjectsDrawer key={idx} idx={idx} project={project}/>)}
      </div>
    </TabsContent>
  )
}


//EXPERIENCE TAB
const ResponsibiltyDrawer = ({ idx, exp }: { idx:number, exp: experienceType}) => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { experience , setExperience} = portfolioState();
  
  const addNewResponsibilty = () => {
    const updatedExperience = experience.map((e, i) => i === idx ? { ...e, responsibilities: [...(e.responsibilities ?? []), ""] } : e );
    setExperience(updatedExperience);
  };
  
  const removeResponsibilty = (resIdx: number) => {
    const updatedExperience = experience.map((e, i) => i === idx ? {...e, responsibilities: e.responsibilities?.filter((_, index) => index !== resIdx) ?? [] } : e);
    setExperience(updatedExperience);
  };
  
  const handleResponsibiltyChange = (e: React.ChangeEvent<HTMLInputElement>, resIdx: number) => {
    const updatedExp = (exp.responsibilities ?? []).map((res, i) => i === resIdx ? e.target.value : res );

    const updatedExperience = experience.map((e, i) => i === idx ? { ...e, responsibilities: updatedExp } : e );
    setExperience(updatedExperience);
  };

  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30 w-full ">
          <div className="flex justify-between border rounded-[8px] items-center shadow-sm mt-2 py-2 px-4">
            <div className="flex gap-2 items-center text-[14px] font-medium">
              <FaLaptopCode/>
              <p>Add Responsibilities</p>
            </div>
            <IoIosArrowDown />
          </div>
        </DialogTrigger>

        <DialogContent showCloseButton={false} className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle>Responsibilities</DialogTitle> 
              <Button onClick={addNewResponsibilty} className="cursor-pointer"><IoAdd /></Button>
            </div>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 px-1 overflow-y-scroll scrollbar"> 
            {exp.responsibilities?.map((i, idx) =>
              <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
                <div className="flex gap-2 items-center w-full">
                  <Input className="text-[14px]" disabled={isLoading} value={i ?? ""} onChange={(e) => handleResponsibiltyChange(e, idx)}/>
                  <Button onClick={()=> removeResponsibilty(idx)} className="cursor-pointer"><FiTrash2 /></Button>
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
      <DrawerTrigger asChild className="cursor-pointer hover:bg-Grey/30 w-full ">
        <div className="flex justify-between border rounded-[8px] items-center shadow-sm mt-2 py-2 px-4">
          <div className="flex gap-2 items-center text-[14px] font-medium">
            <FaLaptopCode/>
            <p>Add Responsibilities</p>
          </div>
          <IoIosArrowDown />
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="py-0">
          <div className="flex justify-between items-center">
            <DialogTitle>Responsibilities</DialogTitle> 
            <Button onClick={addNewResponsibilty} className="cursor-pointer"><IoAdd /></Button>
          </div>
        </DrawerHeader>

        <div className="flex flex-col gap-4 py-2 px-4 overflow-y-scroll scrollbar"> 
          {exp.responsibilities?.map((i, idx) =>
            <Label key={idx} className="flex flex-col gap-2 items-start min-w-full "> 
              <div className="flex gap-2 items-center w-full">
                <Input className="text-[14px]" disabled={isLoading} value={i ?? ""} onChange={(e) => handleResponsibiltyChange(e, idx)}/>
                <Button onClick={()=> removeResponsibilty(idx)} className="cursor-pointer"><FiTrash2 /></Button>
              </div>
            </Label> 
          )}
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

const Duration = ({ idx, exp }: { idx:number, exp: experienceType}) => {
  const { isLoading } = useLoadingState();
  const [openTo, setOpenTo] = useState(false)
  const [openFrom, setOpenFrom] = useState(false)
  const { experience , setExperience} = portfolioState();
  

  const updateDuration = (field: "from" | "to", value: Date | "present" | undefined) => {
    const updated = experience.map((ex, i) =>
      i === idx ? { ...ex, duration: { ...ex.duration, [field]: value } } : ex
    );
    setExperience(updated);
  };

  const handleChangeDurationFrom = (date: Date | undefined) => {
    updateDuration("from", date);
    setOpenFrom(false);
  };

  const handleChangeDurationTo = (date: Date | undefined) => {
    updateDuration("to", date);
    setOpenTo(false);
  };

  const togglePresent = (checked: boolean) => {
    updateDuration("to", checked ? "present" : undefined);
    if (checked) setOpenTo(false);
  };

  return(
    <div className="flex gap-2 items-center w-full justify-between">
      <Label className="flex flex-col gap-2 w-full items-start">
        <p className="whitespace-nowrap">From</p>
        
        <Popover open={openFrom} onOpenChange={setOpenFrom}>
          <PopoverTrigger disabled={isLoading} asChild>
            <Button disabled={isLoading} variant="outline" id="date" className="w-full justify-between font-normal md:max-w-48" >
              {exp?.duration?.from ? new Date(exp?.duration?.from).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar disabled={isLoading} mode="single" selected={exp?.duration?.from} captionLayout="dropdown" onSelect={handleChangeDurationFrom} />
          </PopoverContent>
        </Popover>
      </Label>
       
      <Label className="flex flex-col gap-2 w-full items-start">
        <p className="whitespace-nowrap">To</p>
        
        <Popover open={openTo} onOpenChange={setOpenTo}>
          <PopoverTrigger disabled={isLoading} asChild>
            <Button disabled={isLoading} variant="outline" id="date" className="w-full justify-between font-normal md:max-w-48" >
              {exp?.duration?.to === "present" ? "Present" : exp?.duration?.to ? new Date(exp?.duration?.to).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <div className="flex gap-2 items-center p-2 px-4 text-[14px]">
              <Checkbox checked={exp?.duration?.to === "present"} onCheckedChange={(checked) => togglePresent(checked as boolean)}/> 
              <p>Present (Current)</p>
            </div>
            
            <Separator />

            <Calendar disabled={isLoading || exp?.duration?.to === "present"} hidden={{ before: exp?.duration?.from }} mode="single" selected={exp?.duration?.to === "present" ? undefined : (exp?.duration?.to as Date)} captionLayout="dropdown" onSelect={handleChangeDurationTo} />
          </PopoverContent>
        </Popover>
      </Label>
    </div>
  )
}

const ExperienceDrawer = ({ idx, exp }: { idx:number, exp: experienceType}) => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { experience , setExperience} = portfolioState();

  const removeProject = (idx: number) => {
    setExperience(experience.filter((_, index) => index !== idx))
  }

  const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedExperience = experience.map((exps, i) =>
      i === idx ? { ...exps, comapany: e.target.value } : exps
    );
  
    setExperience(updatedExperience);
  }

  const handleChangeRole = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedExperience = experience.map((exps, i) =>
      i === idx ? { ...exps, role: e.target.value } : exps
    );
  
    setExperience(updatedExperience);
  }

  const handleChangeLiveLink = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedExperience = experience.map((exps, i) =>
      i === idx ? { ...exps, link: e.target.value } : exps
    );
  
    setExperience(updatedExperience);
  } 
  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30">
          <div className="flex justify-between border rounded-[8px] items-center shadow-sm p-2 pl-3">
            <div className="flex gap-2 items-center font-semibold text-[14px]"> 
              <p>Experience {idx + 1}</p>
              <IoIosArrowDown />
            </div>
            <Button onClick={(e) => {e.stopPropagation(); removeProject(idx)}} className="cursor-pointer"> <FiTrash2 /> </Button>
          </div>
        </DialogTrigger>

        <DialogContent showCloseButton={false} className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <DialogTitle>Experience {idx + 1}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 px-1 overflow-y-scroll scrollbar"> 
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Company name</p>

              <Input className="text-[14px]" disabled={isLoading} value={exp.comapany ?? ""} onChange={handleChangeCompany}/>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Role</p>
              <Input className="text-[14px]" disabled={isLoading} value={exp.role ?? ""} onChange={handleChangeRole}/>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Live Link</p>
              <div className="flex gap-2 items-center w-full">
                <Button variant="outline"> 
                  <FaLink /> 
                </Button>
                <Input className="text-[14px]" disabled={isLoading} value={exp.link ?? ""} onChange={handleChangeLiveLink}/>
              </div>
            </Label>

            <ResponsibiltyDrawer idx={idx} exp={exp}/>

            <Duration idx={idx} exp={exp}/>
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
        <div className="flex justify-between border rounded-[8px] items-center shadow-sm p-2 pl-3">
          <div className="flex gap-2 items-center font-semibold text-[14px]"> 
            <p>Experience {idx + 1}</p>
            <IoIosArrowDown />
          </div>
          <Button onClick={(e) => {e.stopPropagation(); removeProject(idx)}} className="cursor-pointer"> <FiTrash2 /> </Button>
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="py-0">
            <DialogTitle>Experience {idx + 1}</DialogTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-4 py-2 px-4 overflow-y-scroll scrollbar"> 
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Company name</p>
            <Input className="text-[14px]" disabled={isLoading} value={exp.comapany ?? ""} onChange={handleChangeCompany}/>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Role</p>
            <Input className="text-[14px]" disabled={isLoading} value={exp.role ?? ""} onChange={handleChangeRole}/>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Live Link</p>
            <div className="flex gap-2 items-center w-full">
              <Button variant="outline"> 
                <FaLink /> 
              </Button>
              <Input className="text-[14px]" disabled={isLoading} value={exp.link ?? ""} onChange={handleChangeLiveLink}/>
            </div>
          </Label>

          <ResponsibiltyDrawer idx={idx} exp={exp}/>

          <Duration idx={idx} exp={exp}/>
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

const ExperienceTab = () => {
  const { experience , setExperience} = portfolioState();

  const  addNewExperience = () => {
    setExperience([...experience, {} as experienceType]);
  }
  return(
    <TabsContent value="experience" className="flex flex-col gap-3 py-2 px-1 overflow-y-auto scrollbar">
      <div className="flex justify-between items-center pr-2">
        <h2 className="font-semibold text-2xl">Experience</h2> 
        <Button onClick={addNewExperience} className="cursor-pointer"><IoAdd /></Button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-scroll scrollbar">
        {experience.map((experience,idx) => <ExperienceDrawer key={idx} idx={idx} exp={experience}/>)}
      </div>
    </TabsContent>
  )
}

//TESTIMONAL TAB
const TestimonyPhoto = ({ idx, tes }: { idx:number, tes: testimonialType}) => {
  const { testimonials , setTestimonials} = portfolioState();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await fileToBase64(file);
      const updatedTestimonials = testimonials.map((t, i) =>
        i === idx ? { ...t, image: { url:base64 } } : t
      );

      setTestimonials(updatedTestimonials);
    }
  };

  const showImage = tes.image?.url !== undefined && tes.image?.url !== "";;

  return (
    <div className="flex flex-col gap-1 items-center">
      <p className="font-medium text-[14px]">Photo</p> 
      { showImage ?
        <Label>
          <Image src={tes?.image?.url ? tes?.image?.url : ""} alt="profile" width={128} height={128} className="rounded-xl cursor-pointer max-h-32 max-w-32"/>
          <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange}  className="absolute size-full hidden" />
        </Label> 
        :
        <Label className="size-32 bg-gray-100 border rounded-xl flex items-center justify-center relative cursor-pointer">
          <ImagePlus size={20}/>
          <Input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageChange} className="absolute size-full hidden" />
        </Label>
      }
    </div>
  )
}

const TestimonialDrawer = ({ idx, tes }: { idx:number, tes: testimonialType}) => {
  const [open, setOpen] = useState(false)
  const { isLoading } = useLoadingState();
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { testimonials , setTestimonials} = portfolioState();

  const removeTestimony = (idx: number) => {
    setTestimonials(testimonials.filter((_, index) => index !== idx))
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedTestimony = testimonials.map((tes, i) =>
      i === idx ? { ...tes, name: e.target.value } : tes
    );
  
    setTestimonials(updatedTestimony);
  }

  const handleChangeCompany= (e: React.ChangeEvent<HTMLInputElement>)=> {
    const updatedTestimonial = testimonials.map((tes, i) =>
      i === idx ? { ...tes, company: e.target.value } : tes
    );
  
    setTestimonials(updatedTestimonial);
  }

  const handleChangeTestimony = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
    const updatedTestimonial = testimonials.map((tes, i) =>
      i === idx ? { ...tes, testimony: e.target.value } : tes
    );
  
    setTestimonials(updatedTestimonial);
  } 
  
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer hover:bg-Grey/30">
          <div className="flex justify-between border rounded-[8px] items-center shadow-sm p-2 pl-3">
            <div className="flex gap-2 items-center font-semibold text-[14px]"> 
              <p>Testimony {idx + 1}</p>
              <IoIosArrowDown />
            </div>
            <Button onClick={(e) => {e.stopPropagation(); removeTestimony(idx)}} className="cursor-pointer"> <FiTrash2 /> </Button>
          </div>
        </DialogTrigger>

        <DialogContent showCloseButton={false} className="flex flex-col gap-4 sm:max-w-[425px] max-h-[90%] overflow-y-auto scrollbar">
          <DialogHeader>
            <DialogTitle>Testimony {idx + 1}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 px-1 overflow-y-scroll scrollbar"> 
            <TestimonyPhoto idx={idx} tes={tes}/>

            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Name</p>

              <Input className="text-[14px]" disabled={isLoading} value={tes.name ?? ""} onChange={handleChangeName}/>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Company</p>
              <Input className="text-[14px]" disabled={isLoading} value={tes.company ?? ""} onChange={handleChangeCompany}/>
            </Label>
            
            <Label className="flex flex-col gap-2 items-start min-w-full ">
              <p className="whitespace-nowrap">Testimony</p>
              <Textarea className="h-30 text-[14px]" disabled={isLoading} value={tes.testimony ?? ""} onChange={handleChangeTestimony}/>
            </Label> 
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
        <div className="flex justify-between border rounded-[8px] items-center shadow-sm p-2 pl-3">
          <div className="flex gap-2 items-center font-semibold text-[14px]"> 
            <p>Testimony {idx + 1}</p>
            <IoIosArrowDown />
          </div>
          <Button onClick={(e) => {e.stopPropagation(); removeTestimony(idx)}} className="cursor-pointer"> <FiTrash2 /> </Button>
        </div>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col gap-4 h-full data-[vaul-drawer-direction=bottom]:max-h-[90vh]">
        <DrawerHeader className="py-0">
          <DialogTitle>Testimony {idx + 1}</DialogTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-4 py-2 px-4 overflow-y-scroll scrollbar"> 
          <TestimonyPhoto idx={idx} tes={tes}/>

          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Name</p>

            <Input className="text-[14px]" disabled={isLoading} value={tes.name ?? ""} onChange={handleChangeName}/>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Company</p>

            <Input className="text-[14px]" disabled={isLoading} value={tes.company ?? ""} onChange={handleChangeCompany}/>
          </Label>
          
          <Label className="flex flex-col gap-2 items-start min-w-full ">
            <p className="whitespace-nowrap">Testimony</p>

            <Textarea className="h-30 text-[14px]" disabled={isLoading} value={tes.testimony ?? ""} onChange={handleChangeTestimony}/>
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

const TestimonialTab = () => {
  const { testimonials , setTestimonials} = portfolioState();

  const  addNewTestimonial = () => {
    setTestimonials([...testimonials, {} as testimonialType]);
  }
  return(
    <TabsContent value="testimonials" className="flex flex-col gap-3 py-2 px-1 overflow-y-auto scrollbar">
      <div className="flex justify-between items-center pr-2">
        <h2 className="font-semibold text-2xl">Testimonials</h2> 
        <Button onClick={addNewTestimonial} className="cursor-pointer"><IoAdd /></Button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-scroll scrollbar">
        {testimonials.map((tes,idx) => <TestimonialDrawer key={idx} idx={idx} tes={tes}/>)}
      </div>
    </TabsContent>
  )
}

//NEWLETTER TAB

const NewsLetterTab = () => {
  const { isLoading } = useLoadingState();
  const { newsletter , setNewsletter} = portfolioState(); 

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletter({...newsletter, email: e.target.value});
  }

  return(
    <TabsContent value="newsletter" className="flex flex-col gap-3 py-2 px-1 overflow-y-auto scrollbar"> 
      <h2 className="font-semibold text-2xl">Newsletter</h2>  

      <div className="flex flex-col gap-4 overflow-y-scroll scrollbar"> 
        <Label className="flex flex-col gap-2 items-start min-w-full ">
          <p className="whitespace-nowrap">Your Email to recieve messages</p>
          <Input className="text-[14px]" disabled={isLoading} value={newsletter.email ?? ""} onChange={handleChangeEmail}/>
        </Label> 
      </div>
    </TabsContent>
  )
}


const Fields = () => {
  return (
    <div className="flex size-full md:max-w-1/2 overflow-y-auto scrollbar">
      <Tabs defaultValue="profile" className="overflow-hidden w-full">
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

        <div className="flex flex-col overflow-y-auto scrollbar">
          <ProfileTab />
          <AboutTab />
          <ProjectsTab />
          <ExperienceTab />
          <TestimonialTab />
          <NewsLetterTab />
        </div>
      </Tabs>
    </div>
  )
}

export default Fields