"use client"
import { Textarea } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Button, Flex, Text, useColorMode, Image, Link, VStack, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { useState } from 'react'

import { AddIcon } from '@chakra-ui/icons'

import authenticIcon from './authentic-icon.png'

import authenticBanner from './authenticBanner.jpg'



export default function Home() {

  const [text, setText] = useState('')

  const [post, setPost] = useState<string[]>([])

  const [qPost, setQPost] = useState(false)

  // const newPost= () => {

  //     // setPost([...post, {}]);
  // }

  const handleTextChange = (event:any) => {
    setText(event.target.value)
  };

  const invite = () =>{

    setPost([...post, text]);
    setText('')
    setQPost(false)
  }

  return (
    <Flex
     height='200vh'
     bgColor='gray.800'
    >

      <Flex
      height='100vh'
      
      display={qPost ? 'block' : 'none'}
      _before={{
        content:'""',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        bgColor:'rgba(0, 0, 0, 0.7)',
        zIndex:'11',
      }}
      >

      </Flex>

      <Flex
        top='20%'
        left='50%'

        position='absolute'
        justify='center'
        align='center'
        
      >

        <Flex

          filter='saturate(0.5)'
          transform='translateX(-50%)'
          zIndex='1001'
          boxShadow='0 0 10px rgba(0,0,0,0.7)'
          display={qPost ? 'block' : 'none'}

          bgColor='gray.800'
          borderRadius='10px'


          width='900px'
          height='600px'
        >




          <Flex
          p="16px"
          gap='20px'
          justify='flex-start'
          align='flex-start'
          flexDir='column'
          
          >
          <Flex
          color='white'
          align='center'
          gap='10px'
          >

            <Avatar 
            size='md' 
            src={authenticIcon.src} 
            />
            <Text>@authenticgames</Text>
          </Flex>

          <Textarea 
          value={text}
          onChange={handleTextChange}
          placeholder='Digite seu texto' 
          _placeholder={{color: '#ccc'}}
          _focus={{ 
            border: "none",
            boxShadow: "none"
          }}
          border='none'
          color='white'
          />

          <Flex
          flexDir='column-reverse'
          align='flex-end'
          justify='flex-end'
          >
            <Button
            onClick={invite}
            width='100px'
            >
              Click
            </Button>
          </Flex>

          

          </Flex>














        </Flex>


      </Flex>



      <Flex
      >

        <Flex
          
          bgColor='gray.800'
          height="100vh"
          gap='25%'
          flexDir='column'
        >

          {/* "top-site" */}


          <Flex
            align='center'
            justify='center'
            gap='20px'
            bgColor='gray.800'
            width='100vw'
            height='300px'
          >

            <Flex
            >

              <Button
                onClick={() => setQPost(true)}


                bgColor='blackAlpha.700'
                _hover={{ bgColor: 'blackAlpha.900' }}
                borderRadius='50%'
              >
                <AddIcon
                  color='white'
                  width='13px'
                />
              </Button>

              {/* <VStack spacing={4}>

          {post.map((post, index) => (
            <Flex
              bgColor='red'
              width='20px'
              height='20px'
              key={index}
            />
          ))}
         </VStack> */}

              <Flex
                justify='start'
                border='2px solid #000'
                borderRadius='5px'
              >


                <Flex
                  position='absolute'
                  top='260'
                  left='0'
                  bgColor='gray.900'
                  height='220px'
                  width='100vw'
                >


                  <Flex
                    position='absolute'
                    top='-40'
                    left='20'

                    bgColor='gray.900'
                    height='250px'
                    width='250px'
                    borderRadius='50%'
                    align='center'
                    justify='center'
                    zIndex='10'
                  >

                    {/* icon do perfil */}

                    <Image
                      height='220px'
                      width='220px'
                      src={authenticIcon.src}
                      borderRadius='50%'
                    />
                  </Flex>

                  <Flex
                    position='absolute'
                    top='5'
                    left='400'
                    color='white'
                  >

                    {/* conteudo do perfil */}
                    <Flex
                      gap='20px'
                      flexDir='column'
                    >

                      <Flex
                        flexDir='column'
                      >

                        {/* name's */}
                        <Text
                          fontSize='20px'
                        > Authentic Games</Text>
                        <Text
                          fontSize='12px'
                          color='#ccc'
                        > @authenticgames </Text>
                      </Flex>

                      {/* seguindo e seguidores */}
                      <Flex
                        gap='20px'
                        flexDir='row'
                      >
                        <Text> <strong>1.291.048</strong> Seguidores</Text>
                        <Text> <strong>967 </strong> Seguindo</Text>
                      </Flex>

                      {/* descricao */}
                      <Flex>
                        <Text
                          width='600px'
                        >

                          oi, meu nome é Marco Túlio, mais conhecido como AuthenticGames,
                          espero que você goste do conteudo publicado aqui no meu perfil XD!

                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>

                </Flex>


                {/* banner do perfil */}
                <Image
                  width='1700px'
                  src={authenticBanner.src}
                />
              </Flex>
            </Flex>
          </Flex>

          




          {/* vídeo principal */}


          <Flex
            
            justify='center'
            gap='20px'
            flexDir='row'
          >



            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9h1l5Z0mH0w?si=NsbWghvJlOT2H1oa"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            />

            <Flex
              gap='50px'
              flexDir='column'
              color='white'
            >
              <Text
                fontSize='20px'
                width='400px'

              >Minecraft Música ♫ - COM MEUS AMIGOS | Animation Minecraft (Feat. Brancoala)
              </Text>

              <Text
                width='400px'
              >
                Outras Animações:<Link
                  color='blue.300'
                  href='http://bit.ly/VideosCanal'
                > http://bit.ly/VideosCanal </Link>
                Camisas Canal: <Link
                  color='blue.300'
                  href="http://bit.ly/CamisasCanal"
                > http://bit.ly/CamisasCanal </Link>
                ● Clique em...
              </Text>
            </Flex>
            </Flex>
            
            <Flex
            gap='20px'
            align='center'
            justify='center'
            width='100vw'
            >

                        
            {post.map((posts, index) => (
            <Flex
            justify='flex-start'
            gap='5px'
            flexDir='column'
            align='center'

            key={index} 
            width="500px" 
            height="200px" 

            bgColor="gray.500" 
            borderRadius='10px'
            padding='5px'
            >
            <Flex
            gap='5px'
            color='black'
            flexDir='row'
            > 
              <Avatar  
              size='sm' 
              src={authenticIcon.src}
              />

              @authenticgames

              
            </Flex>

            {posts}

            </Flex>


            ))}
            </Flex>

            

          </Flex>

        </Flex>

      </Flex>
      
  );
}