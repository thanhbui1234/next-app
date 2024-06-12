import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkImageBreak (url :string) {
  var img = new Image();
  img.onload = function() {
      console.log('image  ');
      
  };
  img.onerror = function() {
    console.log('image err');
    
  };
  img.src = url;

}