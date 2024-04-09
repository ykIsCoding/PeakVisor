import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'
import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass'
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js'
import {TriangleBlurShader} from 'three/examples/jsm/shaders/TriangleBlurShader'
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild('canvasPass') cnvs?:ElementRef;
  renderer:any;
  clock:any;
  pass:any;
  rpass:any;
  ec:any;
  @Input() src:string = '';
  @ViewChild('vid') videoplayer?:ElementRef;
  isPlaying:boolean = false
  vidTexture:any;
  pp:any;

  ngOnInit(): void {
      //this.createThreePass();
  }

  ngAfterViewInit(): void {
    this.createThreePass();
    try{
      const vid = this.videoplayer?.nativeElement
      vid.muted = true
      if(!this.isPlaying){
        vid.play().then((r:any)=>{
          
          this.isPlaying = true
        }).catch((e:any)=>{
          vid.play()
        })
      }

      
    }catch(e){
      console.log(e)
    }
  }

ngOnDestroy(): void {
  try{
    this.renderer.dispose();
    this.pass.dispose();
    this.clock.dispose()
    this.ec.dispose();
    this.rpass.dispose()

    const vid = this.videoplayer?.nativeElement

    if (!vid.paused && this.isPlaying) {
      vid.pause();
      this.isPlaying = false
      vid.removeAttribute('src'); // empty source
      vid.load()
    }

  }catch(e){

  }
}

  createThreePass(){
    
    const video = document.getElementById('vid')
    
    this.vidTexture = new THREE.VideoTexture(video as HTMLVideoElement)
    
    const scene = new THREE.Scene()
    scene.background = this.vidTexture
    console.log(scene)
    var width = this.cnvs?.nativeElement.offsetWidth
    var height = this.cnvs?.nativeElement.offsetHeight

    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.cnvs?.nativeElement,
      antialias: true,
      //alpha:true,
    })

    window.addEventListener('resize', () =>
{
    
    width = this.cnvs?.nativeElement.offsetWidth
    height = this.cnvs?.nativeElement.offsetHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    // Update renderer
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Update effect composer
    effectComposer.setSize(width, height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

    

    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
    scene.add(camera)

    const effectComposer = new EffectComposer(this.renderer)
    effectComposer.setSize(width, height)
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const renderPass = new RenderPass(scene, camera)
    effectComposer.addPass(renderPass)

    //this.pass =  new ShaderPass(TriangleBlurShader)
    //this.pass = new RenderPixelatedPass(1,scene,camera)
    this.pass = new ShaderPass(RGBShiftShader)
    this.pass.enabled = true
    effectComposer.addPass(this.pass)

    
    
    const clock = new THREE.Clock()
const tick = () =>
{
  if (this.vidTexture){
    this.vidTexture.needsUpdate = true;
  }

  const elapsedTime = clock.getElapsedTime()
  
    effectComposer.render()
    window.requestAnimationFrame(tick)

}

tick()
  }
}
