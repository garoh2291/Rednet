import decImage1 from "@/assets/desc-1.jpeg";
import decImage2 from "@/assets/desc-2.jpeg";
import decImage3 from "@/assets/desc-3.jpeg";

export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const SERVICE_MOCKS = [
  {
    id: 1,
    name: "Անշարժ գույքի ապահովագրություն",
    description: "A breif 40min hiking trip through the alps.",
    image: decImage1,
  },
  {
    id: 2,
    name: "Գյուղատնտեսական տեխնիկայի ապահովագրություն",
    description: "A breif 40min hiking trip through the alps.",
    image: decImage2,
  },
  {
    id: 3,
    name: "Անշարժ գույքի ապահովագրություն",
    description: "A breif 40min hiking trip through the alps.",
    image: decImage3,
  },
  {
    id: 4,
    name: "Մեքենաների գույքի ապահովագրություն",
    description: "A breif 40min hiking trip through the alps.",
    image: decImage1,
  },
];
