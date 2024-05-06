import React, { useEffect } from "react";



export class ApiService {
    public getBaseUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         return "https://pw.netiapps.com/";
      }else{
         return "https://pw.netiapps.com/";
      }
         
    }

    public getSiteUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         return "http://localhost:3000";
      }else{
         return "https://hydrolore.netiapps.com";
      }
         
    }

    
}