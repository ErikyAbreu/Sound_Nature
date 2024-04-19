export interface IVideo {
  videoURL: string
  imageURL: string
  description: string
  profile: string
  imageProfile: string
}

const videos: IVideo[] = [
  {
    videoURL: 'video/video01.mp4',
    imageURL: 'image/image01.jpg',
    description: 'SONS DA FLORESTA',
    profile: 'BUDDHA',
    imageProfile: 'image/perfil.jpg',
  },
  {
    videoURL: 'video/video02.mp4',
    imageURL: 'image/image02.jpg',
    description: 'ÁGUA CORRENTE',
    profile: 'POSEIDON',
    imageProfile: 'image/perfil03.jpg',
  },
  {
    videoURL: 'video/video03.mp4',
    imageURL: 'image/image03.jpg',
    description: 'ONDAS DO MAR',
    profile: 'POSEIDON',
    imageProfile: 'image/perfil03.jpg',
  },
  {
    videoURL: 'video/video04.mp4',
    imageURL: 'image/image04.jpg',
    description: 'CHUVA DE RAIOS',
    profile: 'ZEUS',
    imageProfile: 'image/perfil04.jpg',
  },
]
export default videos
