"use client";
import Button from "@/src/Components/button";
// import { getImage } from "@/utils";
import { Tab, Disclosure } from "@headlessui/react";
import Image from "next/image";
import AllInOne from "./partials/all-in-one";
import TrendingEpisodes from "./partials/trending-episodes";
import PodcastYouLike from "./partials/podcasts-you-will-like";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  return (
    <div className="relative mt-[80px]">
      <header className="relative">
        <div className="py-16">
          <div className="absolute md:top-0  bottom-[15rem] right-0">
            <svg
              className="md:w-[298px] w-[160px] h-auto"
              width="298"
              height="409"
              viewBox="0 0 298 409"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="203.24"
                y1="13.2244"
                x2="207.5"
                y2="1.51986"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="229.864"
                y1="12.6777"
                x2="236.092"
                y2="1.89079"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="256.656"
                y1="12.1453"
                x2="264.662"
                y2="2.60368"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="283.65"
                y1="11.2437"
                x2="293.192"
                y2="3.23735"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="17.7088"
                y1="12.7758"
                x2="8.16716"
                y2="4.76944"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="44.4605"
                y1="13.4309"
                x2="36.4542"
                y2="3.88926"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="71.0519"
                y1="13.6777"
                x2="64.8241"
                y2="2.89079"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="97.5291"
                y1="13.9084"
                x2="93.269"
                y2="2.2039"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="123.937"
                y1="14.1297"
                x2="121.774"
                y2="1.86324"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="150.324"
                y1="13.9561"
                x2="150.324"
                y2="1.50036"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="176.742"
                y1="13.7824"
                x2="178.905"
                y2="1.51594"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="175.217"
                y1="35.0222"
                x2="179.477"
                y2="23.3177"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="201.837"
                y1="34.4746"
                x2="208.065"
                y2="23.6877"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="228.628"
                y1="33.9431"
                x2="236.635"
                y2="24.4015"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="255.627"
                y1="33.0416"
                x2="265.168"
                y2="25.0352"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="282.859"
                y1="31.7736"
                x2="293.646"
                y2="25.5458"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="16.4371"
                y1="35.2287"
                x2="8.43071"
                y2="25.6871"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="43.0285"
                y1="35.4746"
                x2="36.8007"
                y2="24.6877"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="69.5017"
                y1="35.7063"
                x2="65.2416"
                y2="24.0018"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="95.9097"
                y1="35.9266"
                x2="93.7468"
                y2="23.6601"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="122.297"
                y1="35.7529"
                x2="122.297"
                y2="23.2972"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="148.718"
                y1="35.5793"
                x2="150.881"
                y2="23.3128"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="147.189"
                y1="56.8201"
                x2="151.449"
                y2="45.1156"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="173.814"
                y1="56.2725"
                x2="180.042"
                y2="45.4855"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="200.605"
                y1="55.74"
                x2="208.611"
                y2="46.1984"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="227.603"
                y1="54.8384"
                x2="237.145"
                y2="46.8321"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="254.836"
                y1="53.5705"
                x2="265.623"
                y2="47.3427"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="282.33"
                y1="52.7185"
                x2="294.034"
                y2="48.4584"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="15.0012"
                y1="57.2725"
                x2="8.77331"
                y2="46.4855"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="41.4783"
                y1="57.5041"
                x2="37.2182"
                y2="45.7996"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="67.8863"
                y1="57.7244"
                x2="65.7234"
                y2="45.458"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="94.2734"
                y1="57.5508"
                x2="94.2734"
                y2="45.0951"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="120.691"
                y1="57.3771"
                x2="122.854"
                y2="45.1107"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="119.166"
                y1="78.617"
                x2="123.426"
                y2="66.9124"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="145.786"
                y1="78.0703"
                x2="152.014"
                y2="67.2834"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="172.578"
                y1="77.5379"
                x2="180.584"
                y2="67.9963"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="199.576"
                y1="76.6363"
                x2="209.118"
                y2="68.6299"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="226.812"
                y1="75.3683"
                x2="237.599"
                y2="69.1405"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="254.306"
                y1="74.5164"
                x2="266.011"
                y2="70.2563"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="282.08"
                y1="73.3033"
                x2="294.347"
                y2="71.1404"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="13.4509"
                y1="79.301"
                x2="9.19083"
                y2="67.5965"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="39.8589"
                y1="79.5223"
                x2="37.696"
                y2="67.2558"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="66.2461"
                y1="79.3486"
                x2="66.2461"
                y2="66.8929"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="92.6675"
                y1="79.175"
                x2="94.8304"
                y2="66.9085"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="91.1384"
                y1="100.415"
                x2="95.3985"
                y2="88.7103"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="117.763"
                y1="99.8672"
                x2="123.991"
                y2="89.0802"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="144.554"
                y1="99.3357"
                x2="152.561"
                y2="89.7941"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="171.553"
                y1="98.4332"
                x2="181.094"
                y2="90.4268"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="198.785"
                y1="97.1662"
                x2="209.572"
                y2="90.9384"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="226.279"
                y1="96.3132"
                x2="237.984"
                y2="92.0531"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="254.053"
                y1="95.1011"
                x2="266.319"
                y2="92.9382"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="11.8355"
                y1="101.319"
                x2="9.6726"
                y2="89.0527"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="38.2227"
                y1="101.146"
                x2="38.2227"
                y2="88.6898"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="64.6402"
                y1="100.972"
                x2="66.8031"
                y2="88.7054"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="297.68"
                y1="95.918"
                x2="285.224"
                y2="95.918"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="63.115"
                y1="122.212"
                x2="67.3751"
                y2="110.507"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="89.7355"
                y1="121.665"
                x2="95.9634"
                y2="110.878"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="116.527"
                y1="121.133"
                x2="124.533"
                y2="111.591"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="143.525"
                y1="120.231"
                x2="153.067"
                y2="112.225"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="170.762"
                y1="118.963"
                x2="181.549"
                y2="112.735"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="198.256"
                y1="118.111"
                x2="209.96"
                y2="113.851"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="226.029"
                y1="116.898"
                x2="238.296"
                y2="114.735"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="10.1953"
                y1="122.943"
                x2="10.1953"
                y2="110.488"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="36.6168"
                y1="122.77"
                x2="38.7797"
                y2="110.503"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="269.652"
                y1="117.716"
                x2="257.197"
                y2="117.716"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="297.365"
                y1="118.868"
                x2="285.099"
                y2="116.705"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="35.0877"
                y1="144.01"
                x2="39.3478"
                y2="132.305"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="61.7121"
                y1="143.462"
                x2="67.9399"
                y2="132.675"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="88.5035"
                y1="142.93"
                x2="96.5099"
                y2="133.389"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="115.502"
                y1="142.029"
                x2="125.043"
                y2="134.023"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="142.734"
                y1="140.761"
                x2="153.521"
                y2="134.533"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="170.228"
                y1="139.909"
                x2="181.933"
                y2="135.649"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="198.002"
                y1="138.696"
                x2="210.269"
                y2="136.533"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="8.58941"
                y1="144.568"
                x2="10.7523"
                y2="132.301"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="241.629"
                y1="139.513"
                x2="229.173"
                y2="139.513"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="269.338"
                y1="140.665"
                x2="257.072"
                y2="138.503"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="296.775"
                y1="141.788"
                x2="285.071"
                y2="137.528"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="7.06421"
                y1="165.807"
                x2="11.3243"
                y2="154.103"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="33.6848"
                y1="165.26"
                x2="39.9126"
                y2="154.473"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="60.4761"
                y1="164.727"
                x2="68.4825"
                y2="155.186"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="87.4744"
                y1="163.826"
                x2="97.016"
                y2="155.819"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="114.711"
                y1="162.558"
                x2="125.498"
                y2="156.33"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="142.205"
                y1="161.706"
                x2="153.909"
                y2="157.446"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="169.979"
                y1="160.494"
                x2="182.245"
                y2="158.331"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="295.93"
                y1="164.29"
                x2="285.143"
                y2="158.062"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="213.605"
                y1="161.311"
                x2="201.15"
                y2="161.311"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="241.315"
                y1="162.463"
                x2="229.048"
                y2="160.3"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="268.748"
                y1="163.585"
                x2="257.043"
                y2="159.325"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="5.66132"
                y1="187.058"
                x2="11.8892"
                y2="176.271"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="32.4527"
                y1="186.525"
                x2="40.4591"
                y2="176.984"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="59.451"
                y1="185.624"
                x2="68.9926"
                y2="177.617"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="86.6836"
                y1="184.356"
                x2="97.4705"
                y2="178.128"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="114.178"
                y1="183.504"
                x2="125.882"
                y2="179.244"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="141.951"
                y1="182.291"
                x2="154.218"
                y2="180.128"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="267.902"
                y1="186.088"
                x2="257.115"
                y2="179.86"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="294.853"
                y1="187.156"
                x2="285.312"
                y2="179.149"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="185.578"
                y1="183.107"
                x2="173.122"
                y2="183.107"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="213.287"
                y1="184.26"
                x2="201.021"
                y2="182.097"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="240.724"
                y1="185.383"
                x2="229.02"
                y2="181.123"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="4.42536"
                y1="208.323"
                x2="12.4317"
                y2="198.781"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="31.4236"
                y1="207.42"
                x2="40.9652"
                y2="199.414"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="58.6602"
                y1="206.154"
                x2="69.4471"
                y2="199.926"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="86.1541"
                y1="205.302"
                x2="97.8586"
                y2="201.041"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="113.928"
                y1="204.088"
                x2="126.194"
                y2="201.926"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="239.879"
                y1="207.886"
                x2="229.092"
                y2="201.658"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="266.826"
                y1="208.953"
                x2="257.284"
                y2="200.946"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="293.578"
                y1="209.609"
                x2="285.571"
                y2="200.067"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="157.555"
                y1="204.905"
                x2="145.099"
                y2="204.905"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="185.264"
                y1="206.058"
                x2="172.997"
                y2="203.895"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="212.701"
                y1="207.181"
                x2="200.996"
                y2="202.921"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="3.40018"
                y1="229.218"
                x2="12.9418"
                y2="221.212"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="30.6328"
                y1="227.95"
                x2="41.4198"
                y2="221.723"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="58.1267"
                y1="227.098"
                x2="69.8313"
                y2="222.838"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="85.9006"
                y1="225.885"
                x2="98.167"
                y2="223.722"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="211.852"
                y1="229.682"
                x2="201.065"
                y2="223.455"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="238.803"
                y1="230.75"
                x2="229.261"
                y2="222.744"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="265.55"
                y1="231.405"
                x2="257.544"
                y2="221.864"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="292.146"
                y1="231.652"
                x2="285.918"
                y2="220.865"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="129.527"
                y1="226.703"
                x2="117.072"
                y2="226.703"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="157.237"
                y1="227.855"
                x2="144.97"
                y2="225.692"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="184.674"
                y1="228.978"
                x2="172.969"
                y2="224.718"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="2.60938"
                y1="249.748"
                x2="13.3963"
                y2="243.52"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="30.1033"
                y1="248.896"
                x2="41.8078"
                y2="244.636"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="57.8771"
                y1="247.683"
                x2="70.1436"
                y2="245.52"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="183.828"
                y1="251.48"
                x2="173.041"
                y2="245.252"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="210.775"
                y1="252.548"
                x2="201.234"
                y2="244.542"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="237.527"
                y1="253.203"
                x2="229.521"
                y2="243.662"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="264.118"
                y1="253.449"
                x2="257.891"
                y2="242.662"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="290.595"
                y1="253.681"
                x2="286.335"
                y2="241.976"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="101.504"
                y1="248.5"
                x2="89.0482"
                y2="248.5"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="129.213"
                y1="249.653"
                x2="116.947"
                y2="247.49"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="156.65"
                y1="250.776"
                x2="144.946"
                y2="246.516"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="2.07595"
                y1="270.693"
                x2="13.7805"
                y2="266.433"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="29.8498"
                y1="269.481"
                x2="42.1163"
                y2="267.318"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="155.801"
                y1="273.278"
                x2="145.014"
                y2="267.05"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="182.752"
                y1="274.345"
                x2="173.21"
                y2="266.339"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="209.503"
                y1="275"
                x2="201.497"
                y2="265.459"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="236.095"
                y1="275.247"
                x2="229.867"
                y2="264.46"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="262.568"
                y1="275.479"
                x2="258.308"
                y2="263.774"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="288.976"
                y1="275.699"
                x2="286.813"
                y2="263.433"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="73.4766"
                y1="270.298"
                x2="61.0209"
                y2="270.298"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="101.186"
                y1="271.451"
                x2="88.9193"
                y2="269.288"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="128.623"
                y1="272.573"
                x2="116.918"
                y2="268.312"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="1.82635"
                y1="291.278"
                x2="14.0928"
                y2="289.115"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="127.777"
                y1="295.075"
                x2="116.99"
                y2="288.847"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="154.724"
                y1="296.143"
                x2="145.183"
                y2="288.137"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="181.476"
                y1="296.798"
                x2="173.47"
                y2="287.256"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="208.068"
                y1="297.045"
                x2="201.84"
                y2="286.258"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="234.545"
                y1="297.276"
                x2="230.285"
                y2="285.571"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="260.953"
                y1="297.497"
                x2="258.79"
                y2="285.23"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="287.34"
                y1="297.323"
                x2="287.34"
                y2="284.868"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="45.4531"
                y1="292.095"
                x2="32.9974"
                y2="292.095"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="73.1623"
                y1="293.248"
                x2="60.8958"
                y2="291.085"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="100.599"
                y1="294.37"
                x2="88.8949"
                y2="290.11"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="99.75"
                y1="316.873"
                x2="88.9631"
                y2="310.645"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="126.701"
                y1="317.94"
                x2="117.159"
                y2="309.934"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="153.453"
                y1="318.596"
                x2="145.446"
                y2="309.054"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="180.044"
                y1="318.842"
                x2="173.816"
                y2="308.055"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="206.517"
                y1="319.073"
                x2="202.257"
                y2="307.369"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="232.925"
                y1="319.294"
                x2="230.762"
                y2="307.027"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="259.312"
                y1="319.12"
                x2="259.312"
                y2="306.664"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="285.734"
                y1="318.946"
                x2="287.897"
                y2="306.68"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="17.4258"
                y1="313.893"
                x2="4.97009"
                y2="313.893"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="45.1349"
                y1="315.045"
                x2="32.8685"
                y2="312.882"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="72.572"
                y1="316.168"
                x2="60.8675"
                y2="311.908"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="284.205"
                y1="340.186"
                x2="288.465"
                y2="328.482"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="71.7266"
                y1="338.67"
                x2="60.9396"
                y2="332.442"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="98.6736"
                y1="339.738"
                x2="89.132"
                y2="331.731"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="125.425"
                y1="340.393"
                x2="117.419"
                y2="330.851"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="152.017"
                y1="340.64"
                x2="145.789"
                y2="329.853"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="178.494"
                y1="340.87"
                x2="174.234"
                y2="329.166"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="204.902"
                y1="341.092"
                x2="202.739"
                y2="328.825"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="231.289"
                y1="340.918"
                x2="231.289"
                y2="328.462"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="257.707"
                y1="340.744"
                x2="259.87"
                y2="328.478"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="17.1115"
                y1="336.842"
                x2="4.84504"
                y2="334.679"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="44.5486"
                y1="337.965"
                x2="32.8441"
                y2="333.705"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="256.181"
                y1="361.984"
                x2="260.441"
                y2="350.28"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="282.802"
                y1="361.437"
                x2="289.03"
                y2="350.65"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="43.6992"
                y1="360.468"
                x2="32.9123"
                y2="354.24"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="70.6502"
                y1="361.536"
                x2="61.1086"
                y2="353.529"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="97.4019"
                y1="362.191"
                x2="89.3956"
                y2="352.649"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="123.993"
                y1="362.437"
                x2="117.766"
                y2="351.65"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="150.467"
                y1="362.668"
                x2="146.206"
                y2="350.964"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="176.875"
                y1="362.889"
                x2="174.712"
                y2="350.623"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="203.262"
                y1="362.716"
                x2="203.262"
                y2="350.26"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="229.683"
                y1="362.542"
                x2="231.846"
                y2="350.276"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="16.5213"
                y1="359.763"
                x2="4.81674"
                y2="355.503"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="228.154"
                y1="383.782"
                x2="232.414"
                y2="372.077"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="254.779"
                y1="383.234"
                x2="261.006"
                y2="372.447"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="281.57"
                y1="382.702"
                x2="289.576"
                y2="373.16"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="15.6758"
                y1="382.265"
                x2="4.88883"
                y2="376.038"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="42.6228"
                y1="383.332"
                x2="33.0812"
                y2="375.326"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="69.3746"
                y1="383.988"
                x2="61.3682"
                y2="374.446"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="95.966"
                y1="384.234"
                x2="89.7382"
                y2="373.447"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="122.443"
                y1="384.466"
                x2="118.183"
                y2="372.762"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="148.851"
                y1="384.686"
                x2="146.688"
                y2="372.42"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="175.238"
                y1="384.513"
                x2="175.238"
                y2="372.057"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="201.656"
                y1="384.339"
                x2="203.819"
                y2="372.073"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="200.131"
                y1="405.579"
                x2="204.391"
                y2="393.874"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="226.751"
                y1="405.032"
                x2="232.979"
                y2="394.245"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="253.543"
                y1="404.5"
                x2="261.549"
                y2="394.958"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="280.541"
                y1="403.598"
                x2="290.082"
                y2="395.592"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="14.5994"
                y1="405.13"
                x2="5.05778"
                y2="397.124"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="41.3511"
                y1="405.785"
                x2="33.3448"
                y2="396.244"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="67.9426"
                y1="406.032"
                x2="61.7147"
                y2="395.245"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="94.4158"
                y1="406.263"
                x2="90.1557"
                y2="394.558"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="120.824"
                y1="406.484"
                x2="118.661"
                y2="394.218"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="147.211"
                y1="406.311"
                x2="147.211"
                y2="393.855"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
              <line
                x1="173.632"
                y1="406.137"
                x2="175.795"
                y2="393.87"
                stroke="#F2F4F7"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute bottom-16  right-0">
            <svg
              width="388"
              height="104"
              viewBox="0 0 388 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M0 28.1917C0 26.7459 0.891354 25.5738 1.99089 25.5738C3.09043 25.5738 3.98179 26.7459 3.98179 28.1917V75.8083C3.98179 77.2542 3.09043 78.4263 1.99089 78.4263C0.891354 78.4263 0 77.2542 0 75.8083V28.1917Z"
                  fill="url(#paint0_linear_3071_93066)"
                />
                <path
                  d="M7.70941 9.43759C7.70941 7.99174 8.60076 6.81966 9.7003 6.81966C10.7998 6.81966 11.6912 7.99175 11.6912 9.43759V94.5624C11.6912 96.0082 10.7998 97.1803 9.7003 97.1803C8.60076 97.1803 7.70941 96.0082 7.70941 94.5624V9.43759Z"
                  fill="url(#paint1_linear_3071_93066)"
                />
                <path
                  d="M15.4188 16.2572C15.4188 14.8114 16.3102 13.6393 17.4097 13.6393C18.5093 13.6393 19.4006 14.8114 19.4006 16.2573V87.7427C19.4006 89.1885 18.5093 90.3606 17.4097 90.3606C16.3102 90.3606 15.4188 89.1885 15.4188 87.7427V16.2572Z"
                  fill="url(#paint2_linear_3071_93066)"
                />
                <path
                  d="M23.1283 35.0114C23.1283 33.5655 24.0196 32.3935 25.1191 32.3935C26.2187 32.3935 27.11 33.5656 27.11 35.0114V68.9886C27.11 70.4345 26.2187 71.6066 25.1191 71.6066C24.0196 71.6066 23.1283 70.4345 23.1283 68.9886V35.0114Z"
                  fill="url(#paint3_linear_3071_93066)"
                />
                <path
                  d="M30.8377 28.1917C30.8377 26.7458 31.729 25.5737 32.8286 25.5737C33.9281 25.5737 34.8195 26.7458 34.8195 28.1917V75.8083C34.8195 77.2541 33.9281 78.4262 32.8286 78.4262C31.729 78.4262 30.8377 77.2541 30.8377 75.8083V28.1917Z"
                  fill="url(#paint4_linear_3071_93066)"
                />
                <path
                  d="M38.5471 33.3064C38.5471 31.8606 39.4384 30.6885 40.538 30.6885C41.6375 30.6885 42.5289 31.8606 42.5289 33.3064V70.6935C42.5289 72.1394 41.6375 73.3115 40.538 73.3115C39.4384 73.3115 38.5471 72.1394 38.5471 70.6935V33.3064Z"
                  fill="url(#paint5_linear_3071_93066)"
                />
                <path
                  d="M46.2565 2.61794C46.2565 1.17209 47.1479 0 48.2474 0C49.3469 0 50.2383 1.17209 50.2383 2.61794V101.382C50.2383 102.828 49.3469 104 48.2474 104C47.1479 104 46.2565 102.828 46.2565 101.382V2.61794Z"
                  fill="url(#paint6_linear_3071_93066)"
                />
                <path
                  d="M53.9659 28.1917C53.9659 26.7458 54.8573 25.5737 55.9568 25.5737C57.0563 25.5737 57.9477 26.7458 57.9477 28.1917V75.8083C57.9477 77.2541 57.0563 78.4262 55.9568 78.4262C54.8573 78.4262 53.9659 77.2541 53.9659 75.8083V28.1917Z"
                  fill="url(#paint7_linear_3071_93066)"
                />
                <path
                  d="M61.6754 28.1917C61.6754 26.7458 62.5668 25.5737 63.6663 25.5737C64.7658 25.5737 65.6572 26.7458 65.6572 28.1917V75.8083C65.6572 77.2541 64.7658 78.4262 63.6663 78.4262C62.5668 78.4262 61.6754 77.2541 61.6754 75.8083V28.1917Z"
                  fill="url(#paint8_linear_3071_93066)"
                />
                <path
                  d="M69.3848 28.1917C69.3848 26.7458 70.2762 25.5737 71.3757 25.5737C72.4752 25.5737 73.3666 26.7458 73.3666 28.1917V75.8083C73.3666 77.2541 72.4752 78.4262 71.3757 78.4262C70.2762 78.4262 69.3848 77.2541 69.3848 75.8083V28.1917Z"
                  fill="url(#paint9_linear_3071_93066)"
                />
                <path
                  d="M77.0942 36.7163C77.0942 35.2705 77.9856 34.0984 79.0851 34.0984C80.1847 34.0984 81.076 35.2705 81.076 36.7163V67.2837C81.076 68.7296 80.1847 69.9016 79.0851 69.9016C77.9856 69.9016 77.0942 68.7296 77.0942 67.2837V36.7163Z"
                  fill="url(#paint10_linear_3071_93066)"
                />
                <path
                  d="M84.8036 31.6015C84.8036 30.1557 85.695 28.9836 86.7945 28.9836C87.8941 28.9836 88.7854 30.1557 88.7854 31.6015V72.3984C88.7854 73.8443 87.8941 75.0164 86.7945 75.0164C85.695 75.0164 84.8036 73.8443 84.8036 72.3985V31.6015Z"
                  fill="url(#paint11_linear_3071_93066)"
                />
                <path
                  d="M92.513 45.2409C92.513 43.795 93.4044 42.6229 94.5039 42.6229C95.6035 42.6229 96.4948 43.795 96.4948 45.2409V58.7591C96.4948 60.2049 95.6035 61.377 94.5039 61.377C93.4044 61.377 92.513 60.2049 92.513 58.7591V45.2409Z"
                  fill="url(#paint12_linear_3071_93066)"
                />
                <path
                  d="M100.222 31.6015C100.222 30.1557 101.114 28.9836 102.213 28.9836C103.313 28.9836 104.204 30.1557 104.204 31.6015V72.3984C104.204 73.8443 103.313 75.0164 102.213 75.0164C101.114 75.0164 100.222 73.8443 100.222 72.3985V31.6015Z"
                  fill="url(#paint13_linear_3071_93066)"
                />
                <path
                  d="M107.932 6.02778C107.932 4.58193 108.823 3.40984 109.923 3.40984C111.022 3.40984 111.914 4.58193 111.914 6.02778V97.9722C111.914 99.4181 111.022 100.59 109.923 100.59C108.823 100.59 107.932 99.4181 107.932 97.9722V6.02778Z"
                  fill="url(#paint14_linear_3071_93066)"
                />
                <path
                  d="M115.641 21.372C115.641 19.9262 116.533 18.7541 117.632 18.7541C118.732 18.7541 119.623 19.9262 119.623 21.372V82.628C119.623 84.0738 118.732 85.2459 117.632 85.2459C116.533 85.2459 115.641 84.0738 115.641 82.628V21.372Z"
                  fill="url(#paint15_linear_3071_93066)"
                />
                <path
                  d="M123.351 31.6015C123.351 30.1557 124.242 28.9836 125.342 28.9836C126.441 28.9836 127.332 30.1557 127.332 31.6015V72.3984C127.332 73.8443 126.441 75.0164 125.342 75.0164C124.242 75.0164 123.351 73.8443 123.351 72.3985V31.6015Z"
                  fill="url(#paint16_linear_3071_93066)"
                />
                <path
                  d="M131.06 40.1261C131.06 38.6803 131.952 37.5082 133.051 37.5082C134.151 37.5082 135.042 38.6803 135.042 40.1261V63.8739C135.042 65.3197 134.151 66.4918 133.051 66.4918C131.952 66.4918 131.06 65.3197 131.06 63.8739V40.1261Z"
                  fill="url(#paint17_linear_3071_93066)"
                />
                <path
                  d="M138.77 21.372C138.77 19.9262 139.661 18.7541 140.76 18.7541C141.86 18.7541 142.751 19.9262 142.751 21.372V82.628C142.751 84.0738 141.86 85.2459 140.76 85.2459C139.661 85.2459 138.77 84.0738 138.77 82.628V21.372Z"
                  fill="url(#paint18_linear_3071_93066)"
                />
                <path
                  d="M146.479 6.02778C146.479 4.58193 147.37 3.40984 148.47 3.40984C149.569 3.40984 150.461 4.58193 150.461 6.02778V97.9722C150.461 99.4181 149.569 100.59 148.47 100.59C147.37 100.59 146.479 99.4181 146.479 97.9722V6.02778Z"
                  fill="url(#paint19_linear_3071_93066)"
                />
                <path
                  d="M154.188 21.372C154.188 19.9262 155.08 18.7541 156.179 18.7541C157.279 18.7541 158.17 19.9262 158.17 21.372V82.628C158.17 84.0738 157.279 85.2459 156.179 85.2459C155.08 85.2459 154.188 84.0738 154.188 82.628V21.372Z"
                  fill="url(#paint20_linear_3071_93066)"
                />
                <path
                  d="M161.898 21.372C161.898 19.9262 162.789 18.7541 163.889 18.7541C164.988 18.7541 165.88 19.9262 165.88 21.372V82.628C165.88 84.0738 164.988 85.2459 163.889 85.2459C162.789 85.2459 161.898 84.0738 161.898 82.628V21.372Z"
                  fill="url(#paint21_linear_3071_93066)"
                />
                <path
                  d="M169.607 16.2572C169.607 14.8114 170.499 13.6393 171.598 13.6393C172.698 13.6393 173.589 14.8114 173.589 16.2573V87.7427C173.589 89.1885 172.698 90.3606 171.598 90.3606C170.499 90.3606 169.607 89.1885 169.607 87.7427V16.2572Z"
                  fill="url(#paint22_linear_3071_93066)"
                />
                <path
                  d="M177.317 6.02778C177.317 4.58193 178.208 3.40984 179.308 3.40984C180.407 3.40984 181.298 4.58193 181.298 6.02778V97.9722C181.298 99.4181 180.407 100.59 179.308 100.59C178.208 100.59 177.317 99.4181 177.317 97.9722V6.02778Z"
                  fill="url(#paint23_linear_3071_93066)"
                />
                <path
                  d="M185.026 24.7819C185.026 23.336 185.917 22.1639 187.017 22.1639C188.117 22.1639 189.008 23.336 189.008 24.7819V79.2181C189.008 80.664 188.117 81.8361 187.017 81.8361C185.917 81.8361 185.026 80.664 185.026 79.2181V24.7819Z"
                  fill="url(#paint24_linear_3071_93066)"
                />
                <path
                  d="M192.735 31.6015C192.735 30.1557 193.627 28.9836 194.726 28.9836C195.826 28.9836 196.717 30.1557 196.717 31.6015V72.3984C196.717 73.8443 195.826 75.0164 194.726 75.0164C193.627 75.0164 192.735 73.8443 192.735 72.3985V31.6015Z"
                  fill="url(#paint25_linear_3071_93066)"
                />
                <path
                  d="M200.445 21.372C200.445 19.9262 201.336 18.7541 202.436 18.7541C203.535 18.7541 204.427 19.9262 204.427 21.372V82.628C204.427 84.0738 203.535 85.2459 202.436 85.2459C201.336 85.2459 200.445 84.0738 200.445 82.628V21.372Z"
                  fill="url(#paint26_linear_3071_93066)"
                />
                <path
                  d="M208.154 21.372C208.154 19.9262 209.046 18.7541 210.145 18.7541C211.245 18.7541 212.136 19.9262 212.136 21.372V82.628C212.136 84.0738 211.245 85.2459 210.145 85.2459C209.046 85.2459 208.154 84.0738 208.154 82.628V21.372Z"
                  fill="url(#paint27_linear_3071_93066)"
                />
                <path
                  d="M215.864 28.1917C215.864 26.7458 216.755 25.5737 217.855 25.5737C218.954 25.5737 219.846 26.7458 219.846 28.1917V75.8083C219.846 77.2541 218.954 78.4262 217.855 78.4262C216.755 78.4262 215.864 77.2541 215.864 75.8083V28.1917Z"
                  fill="url(#paint28_linear_3071_93066)"
                />
                <path
                  d="M223.573 9.43759C223.573 7.99174 224.465 6.81966 225.564 6.81966C226.664 6.81966 227.555 7.99175 227.555 9.43759V94.5624C227.555 96.0082 226.664 97.1803 225.564 97.1803C224.465 97.1803 223.573 96.0082 223.573 94.5624V9.43759Z"
                  fill="url(#paint29_linear_3071_93066)"
                />
                <path
                  d="M231.283 16.2572C231.283 14.8114 232.174 13.6393 233.273 13.6393C234.373 13.6393 235.264 14.8114 235.264 16.2573V87.7427C235.264 89.1885 234.373 90.3606 233.273 90.3606C232.174 90.3606 231.283 89.1885 231.283 87.7427V16.2572Z"
                  fill="url(#paint30_linear_3071_93066)"
                />
                <path
                  d="M238.992 24.7819C238.992 23.336 239.883 22.1639 240.983 22.1639C242.082 22.1639 242.974 23.336 242.974 24.7819V79.2181C242.974 80.664 242.082 81.8361 240.983 81.8361C239.883 81.8361 238.992 80.664 238.992 79.2181V24.7819Z"
                  fill="url(#paint31_linear_3071_93066)"
                />
                <path
                  d="M246.701 28.1917C246.701 26.7458 247.593 25.5737 248.692 25.5737C249.792 25.5737 250.683 26.7458 250.683 28.1917V75.8083C250.683 77.2541 249.792 78.4262 248.692 78.4262C247.593 78.4262 246.701 77.2541 246.701 75.8083V28.1917Z"
                  fill="url(#paint32_linear_3071_93066)"
                />
                <path
                  d="M254.411 21.372C254.411 19.9262 255.302 18.7541 256.402 18.7541C257.501 18.7541 258.393 19.9262 258.393 21.372V82.628C258.393 84.0738 257.501 85.2459 256.402 85.2459C255.302 85.2459 254.411 84.0738 254.411 82.628V21.372Z"
                  fill="url(#paint33_linear_3071_93066)"
                />
                <path
                  d="M262.12 2.61794C262.12 1.17209 263.012 0 264.111 0C265.211 0 266.102 1.17209 266.102 2.61794V101.382C266.102 102.828 265.211 104 264.111 104C263.012 104 262.12 102.828 262.12 101.382V2.61794Z"
                  fill="url(#paint34_linear_3071_93066)"
                />
                <path
                  d="M269.83 28.1917C269.83 26.7458 270.721 25.5737 271.821 25.5737C272.92 25.5737 273.811 26.7458 273.811 28.1917V75.8083C273.811 77.2541 272.92 78.4262 271.821 78.4262C270.721 78.4262 269.83 77.2541 269.83 75.8083V28.1917Z"
                  fill="url(#paint35_linear_3071_93066)"
                />
                <path
                  d="M277.539 28.1917C277.539 26.7458 278.43 25.5737 279.53 25.5737C280.629 25.5737 281.521 26.7458 281.521 28.1917V75.8083C281.521 77.2541 280.629 78.4262 279.53 78.4262C278.43 78.4262 277.539 77.2541 277.539 75.8083V28.1917Z"
                  fill="url(#paint36_linear_3071_93066)"
                />
                <path
                  d="M285.249 28.1917C285.249 26.7458 286.14 25.5737 287.239 25.5737C288.339 25.5737 289.23 26.7458 289.23 28.1917V75.8083C289.23 77.2541 288.339 78.4262 287.239 78.4262C286.14 78.4262 285.249 77.2541 285.249 75.8083V28.1917Z"
                  fill="url(#paint37_linear_3071_93066)"
                />
                <path
                  d="M292.958 41.8311C292.958 40.3852 293.849 39.2131 294.949 39.2131C296.048 39.2131 296.94 40.3852 296.94 41.8311V62.169C296.94 63.6148 296.048 64.7869 294.949 64.7869C293.849 64.7869 292.958 63.6148 292.958 62.169V41.8311Z"
                  fill="url(#paint38_linear_3071_93066)"
                />
                <path
                  d="M300.667 38.4212C300.667 36.9754 301.559 35.8033 302.658 35.8033C303.758 35.8033 304.649 36.9754 304.649 38.4212V65.5788C304.649 67.0246 303.758 68.1967 302.658 68.1967C301.559 68.1967 300.667 67.0246 300.667 65.5788V38.4212Z"
                  fill="url(#paint39_linear_3071_93066)"
                />
                <path
                  d="M308.377 48.6507C308.377 47.2049 309.268 46.0328 310.368 46.0328C311.467 46.0328 312.359 47.2049 312.359 48.6507V55.3493C312.359 56.7951 311.467 57.9672 310.368 57.9672C309.268 57.9672 308.377 56.7951 308.377 55.3493V48.6507Z"
                  fill="url(#paint40_linear_3071_93066)"
                />
                <path
                  d="M316.086 38.4212C316.086 36.9754 316.977 35.8033 318.077 35.8033C319.177 35.8033 320.068 36.9754 320.068 38.4212V65.5788C320.068 67.0246 319.177 68.1967 318.077 68.1967C316.977 68.1967 316.086 67.0246 316.086 65.5788V38.4212Z"
                  fill="url(#paint41_linear_3071_93066)"
                />
                <path
                  d="M323.796 21.372C323.796 19.9262 324.687 18.7541 325.786 18.7541C326.886 18.7541 327.777 19.9262 327.777 21.372V82.628C327.777 84.0738 326.886 85.2459 325.786 85.2459C324.687 85.2459 323.796 84.0738 323.796 82.628V21.372Z"
                  fill="url(#paint42_linear_3071_93066)"
                />
                <path
                  d="M331.505 31.6015C331.505 30.1557 332.396 28.9836 333.496 28.9836C334.595 28.9836 335.487 30.1557 335.487 31.6015V72.3984C335.487 73.8443 334.595 75.0164 333.496 75.0164C332.396 75.0164 331.505 73.8443 331.505 72.3985V31.6015Z"
                  fill="url(#paint43_linear_3071_93066)"
                />
                <path
                  d="M339.214 38.4212C339.214 36.9754 340.106 35.8033 341.205 35.8033C342.305 35.8033 343.196 36.9754 343.196 38.4212V65.5788C343.196 67.0246 342.305 68.1967 341.205 68.1967C340.106 68.1967 339.214 67.0246 339.214 65.5788V38.4212Z"
                  fill="url(#paint44_linear_3071_93066)"
                />
                <path
                  d="M346.924 45.2409C346.924 43.795 347.815 42.6229 348.915 42.6229C350.014 42.6229 350.906 43.795 350.906 45.2409V58.7591C350.906 60.2049 350.014 61.377 348.915 61.377C347.815 61.377 346.924 60.2049 346.924 58.7591V45.2409Z"
                  fill="url(#paint45_linear_3071_93066)"
                />
                <path
                  d="M354.633 31.6015C354.633 30.1557 355.525 28.9836 356.624 28.9836C357.724 28.9836 358.615 30.1557 358.615 31.6015V72.3984C358.615 73.8443 357.724 75.0164 356.624 75.0164C355.525 75.0164 354.633 73.8443 354.633 72.3985V31.6015Z"
                  fill="url(#paint46_linear_3071_93066)"
                />
                <path
                  d="M362.343 21.372C362.343 19.9262 363.234 18.7541 364.334 18.7541C365.433 18.7541 366.324 19.9262 366.324 21.372V82.628C366.324 84.0738 365.433 85.2459 364.334 85.2459C363.234 85.2459 362.343 84.0738 362.343 82.628V21.372Z"
                  fill="url(#paint47_linear_3071_93066)"
                />
                <path
                  d="M370.052 31.6015C370.052 30.1557 370.943 28.9836 372.043 28.9836C373.142 28.9836 374.034 30.1557 374.034 31.6015V72.3984C374.034 73.8443 373.142 75.0164 372.043 75.0164C370.943 75.0164 370.052 73.8443 370.052 72.3985V31.6015Z"
                  fill="url(#paint48_linear_3071_93066)"
                />
                <path
                  d="M377.761 31.6015C377.761 30.1557 378.653 28.9836 379.752 28.9836C380.852 28.9836 381.743 30.1557 381.743 31.6015V72.3984C381.743 73.8443 380.852 75.0164 379.752 75.0164C378.653 75.0164 377.761 73.8443 377.761 72.3985V31.6015Z"
                  fill="url(#paint49_linear_3071_93066)"
                />
                <path
                  d="M385.471 28.1917C385.471 26.7459 386.362 25.5738 387.462 25.5738C388.561 25.5738 389.453 26.7459 389.453 28.1917V75.8083C389.453 77.2541 388.561 78.4262 387.462 78.4262C386.362 78.4262 385.471 77.2541 385.471 75.8083V28.1917Z"
                  fill="url(#paint50_linear_3071_93066)"
                />
                <path
                  d="M393.18 21.372C393.18 19.9262 394.072 18.7541 395.171 18.7541C396.271 18.7541 397.162 19.9262 397.162 21.372V82.628C397.162 84.0738 396.271 85.2459 395.171 85.2459C394.072 85.2459 393.18 84.0738 393.18 82.628V21.372Z"
                  fill="url(#paint51_linear_3071_93066)"
                />
                <path
                  d="M400.89 33.3065C400.89 31.8606 401.781 30.6885 402.881 30.6885C403.98 30.6885 404.872 31.8606 404.872 33.3065V70.6935C404.872 72.1394 403.98 73.3115 402.881 73.3115C401.781 73.3115 400.89 72.1394 400.89 70.6935V33.3065Z"
                  fill="url(#paint52_linear_3071_93066)"
                />
                <path
                  d="M408.599 38.4212C408.599 36.9754 409.491 35.8033 410.59 35.8033C411.69 35.8033 412.581 36.9754 412.581 38.4212V65.5788C412.581 67.0246 411.69 68.1967 410.59 68.1967C409.491 68.1967 408.599 67.0246 408.599 65.5788V38.4212Z"
                  fill="url(#paint53_linear_3071_93066)"
                />
                <path
                  d="M416.309 31.6015C416.309 30.1557 417.2 28.9836 418.3 28.9836C419.399 28.9836 420.291 30.1557 420.291 31.6015V72.3985C420.291 73.8443 419.399 75.0164 418.3 75.0164C417.2 75.0164 416.309 73.8443 416.309 72.3985V31.6015Z"
                  fill="url(#paint54_linear_3071_93066)"
                />
                <path
                  d="M424.018 31.6015C424.018 30.1557 424.91 28.9836 426.009 28.9836C427.109 28.9836 428 30.1557 428 31.6015V72.3985C428 73.8443 427.109 75.0164 426.009 75.0164C424.91 75.0164 424.018 73.8443 424.018 72.3985V31.6015Z"
                  fill="url(#paint55_linear_3071_93066)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint17_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint18_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint19_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint20_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint21_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint22_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint23_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint24_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint25_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint26_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint27_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint28_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint29_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint30_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint31_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint32_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint33_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint34_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint35_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint36_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint37_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint38_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint39_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint40_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint41_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint42_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint43_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint44_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint45_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint46_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint47_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint48_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint49_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint50_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint51_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint52_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint53_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint54_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
                <linearGradient
                  id="paint55_linear_3071_93066"
                  x1="0"
                  y1="0"
                  x2="428"
                  y2="-1.83608e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#8699BF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="container mx-auto px-4 md:px-14 xl:px-16">
            <div className="flex md:flex-row flex-col justify-between items-center md:gap-0 gap-12">
              <div className="md:md:w-6/12">
                <div className="md:text-left text-center">
                  <h1 className="font-raleway text-4xl md:text-6xl font-bold md:leading-[1.1] leading-tight">
                    Transform your{" "}
                    <span className="text-[#36FFE8]"> podcast </span> into the
                    next sensation
                  </h1>
                  <div className="mt-8">
                    <p className="text-[#F2F4F7]">
                      Powerful tools for beginners, pros, and everyone in{" "}
                      <br className="md:inline hidden" /> between - all for
                      free.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex md:flex-row flex-col gap-3 md:gap-6">
                      <div>
                        <Link
                          href={"/signup"}
                          className="inline-block font-medium w-full rounded-[40px] py-3 px-5 bg-gradient-to-r from-[#083F62] to-[#25AEA4] text-white"
                        >
                          Get Started
                        </Link>
                      </div>
                      <div>
                        <Button
                          onClick={() =>
                            (window.location.href =
                              "https://share-eu1.hsforms.com/1KbjPQ4jtQaeZOEnY1D1K6g2b3crg")
                          }
                          className="font-medium !from-transparent !to-transparent border bg-gradient-to-r bg-clip-text !border-[#083F62] w-full"
                        >
                          Join waitlist
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex md:flex-row flex-col justify-center items-center gap-2">
                      <div className="flex">
                        <img
                          width={40}
                          height={40}
                          src={"/images/avatar.png"}
                          alt=""
                          className="relative"
                        />
                        <img
                          width={40}
                          height={40}
                          src={"/images/avatar-1.png"}
                          alt=""
                          className="relative -left-3 "
                        />
                        <img
                          width={40}
                          height={40}
                          src={"/images/avatar-2.png"}
                          alt=""
                          className="relative -left-6"
                        />
                        <img
                          width={40}
                          height={40}
                          src={"/images/avatar-3.png"}
                          alt=""
                          className="relative -left-9"
                        />
                        <img
                          width={40}
                          height={40}
                          src={"/images/avatar-4.png"}
                          alt=""
                          className="relative -left-12"
                        />
                      </div>

                      <div className="relative md:block flex justify-center w-full">
                        <div className="flex gap-1 ">
                          {[1, 1, 1, 1, 1].map(() => (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2874_94724)">
                                <path
                                  d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                  fill="#F2F4F7"
                                />
                                <g clipPath="url(#clip1_2874_94724)">
                                  <path
                                    d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                                    fill="#FEC84B"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_2874_94724">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_2874_94724">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          ))}
                          <span className="font-medium text-[#D0D5DD]">
                            5.0
                          </span>
                        </div>

                        <span className="font-medium text-[#D0D5DD]">
                          from 200+ reviews
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-5/12 relative">
                <img
                  width={1040}
                  height={1120}
                  src={"/images/home-cto.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        style={{
          background: "linear-gradient(45deg, #083F62 0%, #25AEA4 100%",
        }}
        className="relative bg-gradient-to-r from-[#083F62] to-[#25AEA4]"
      >
        <div className="absolute left-0 -top-10">
          <svg
            width="213"
            height="176"
            viewBox="0 0 213 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200.904 115.922C201.208 116.692 202.08 117.069 202.85 116.765C203.621 116.46 203.998 115.588 203.693 114.818L200.904 115.922ZM89.2248 101.275L88.9036 102.74L88.904 102.74L89.2248 101.275ZM123.13 44.0481L121.923 44.9389L121.923 44.939L123.13 44.0481ZM11.6845 97.5159C11.4802 98.3188 11.9655 99.1352 12.7683 99.3394C13.5712 99.5437 14.3876 99.0584 14.5919 98.2556L11.6845 97.5159ZM209.586 102.518C209.864 101.737 209.457 100.879 208.676 100.601C207.896 100.323 207.038 100.731 206.76 101.511L209.586 102.518ZM202.94 116.706L202.621 118.172C203.359 118.332 204.1 117.92 204.353 117.209L202.94 116.706ZM187.725 112.192C186.902 112.101 186.16 112.694 186.069 113.518C185.977 114.341 186.571 115.082 187.394 115.174L187.725 112.192ZM202.298 115.37C203.693 114.818 203.693 114.817 203.692 114.816C203.692 114.815 203.691 114.814 203.691 114.813C203.69 114.81 203.688 114.807 203.687 114.802C203.683 114.792 203.677 114.779 203.67 114.761C203.656 114.726 203.635 114.675 203.608 114.608C203.554 114.474 203.473 114.277 203.366 114.022C203.152 113.512 202.833 112.769 202.411 111.826C201.567 109.939 200.309 107.252 198.649 104.037C195.331 97.6092 190.394 89.0484 183.922 80.5361C171.036 63.585 151.77 46.4513 126.822 47.403L126.937 50.4009C150.361 49.5072 168.805 65.6075 181.534 82.3517C187.871 90.687 192.719 99.0892 195.983 105.413C197.615 108.573 198.848 111.208 199.672 113.051C200.084 113.972 200.394 114.694 200.6 115.184C200.702 115.429 200.779 115.616 200.83 115.74C200.855 115.802 200.874 115.849 200.886 115.879C200.893 115.895 200.897 115.906 200.9 115.913C200.901 115.917 200.902 115.919 200.903 115.921C200.903 115.921 200.903 115.922 200.904 115.922C200.904 115.922 200.904 115.922 202.298 115.37ZM126.822 47.403C102.123 48.3453 87.1654 60.6298 81.0302 73.4835C77.9782 79.8778 77.0908 86.467 78.3775 91.843C79.6758 97.2678 83.2229 101.494 88.9036 102.74L89.5461 99.8096C85.1885 98.8541 82.3768 95.6642 81.2951 91.1447C80.2017 86.5765 80.913 80.6936 83.7376 74.7757C89.3559 63.0049 103.264 51.304 126.937 50.4009L126.822 47.403ZM88.904 102.74C94.3732 103.938 100.691 102.578 106.655 99.5753C112.641 96.5614 118.419 91.8216 122.866 86.0167C131.771 74.3911 135.47 58.2362 124.337 43.1571L121.923 44.939C132.043 58.6459 128.826 73.3022 120.484 84.1924C116.307 89.6453 110.879 94.0895 105.306 96.8958C99.7091 99.7134 94.1135 100.81 89.5457 99.8095L88.904 102.74ZM124.337 43.1573C118.683 35.4974 109.548 31.6912 99.045 31.0609C88.544 30.4307 76.5357 32.9561 64.8272 38.1084C41.4306 48.404 18.8445 69.371 11.6845 97.5159L14.5919 98.2556C21.4694 71.2208 43.2567 50.8781 66.0355 40.8543C77.4146 35.8469 88.9444 33.4602 98.8652 34.0555C108.784 34.6508 116.955 38.2078 121.923 44.9389L124.337 43.1573ZM206.76 101.511L201.527 116.203L204.353 117.209L209.586 102.518L206.76 101.511ZM202.94 116.706C203.259 115.24 203.259 115.24 203.259 115.24C203.259 115.24 203.259 115.24 203.259 115.24C203.258 115.24 203.258 115.24 203.257 115.24C203.256 115.239 203.253 115.239 203.25 115.238C203.244 115.237 203.235 115.235 203.223 115.232C203.2 115.227 203.165 115.22 203.119 115.21C203.027 115.19 202.893 115.161 202.721 115.124C202.377 115.049 201.882 114.943 201.279 114.814C200.073 114.557 198.432 114.21 196.696 113.852C193.263 113.145 189.335 112.371 187.725 112.192L187.394 115.174C188.832 115.333 192.594 116.07 196.091 116.79C197.818 117.146 199.451 117.492 200.653 117.748C201.253 117.876 201.746 117.982 202.088 118.056C202.259 118.093 202.393 118.122 202.483 118.142C202.529 118.152 202.563 118.159 202.586 118.164C202.598 118.167 202.607 118.168 202.613 118.17C202.616 118.17 202.618 118.171 202.619 118.171C202.62 118.171 202.62 118.171 202.621 118.172C202.621 118.172 202.621 118.172 202.621 118.172C202.621 118.172 202.621 118.172 202.94 116.706Z"
              fill="#4FFFEB"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0">
          <svg
            width="162"
            height="154"
            viewBox="0 0 162 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M72.104 58.2018C57.0662 45.8325 44.8812 31.102 35.7246 13.94C33.8933 10.5217 29.6322 9.2178 26.1809 11.0503C22.7648 12.8828 21.4615 17.1469 23.2928 20.6005C33.365 39.3836 46.6774 55.5236 63.1591 69.0911C66.1526 71.558 70.625 71.135 73.0902 68.1396C75.5555 65.1089 75.0975 60.6686 72.104 58.2018Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.0845 10.0285C64.8593 24.2656 65.5638 38.5026 66.4442 52.7397C66.6908 56.6161 70.0364 59.5763 73.9103 59.3296C77.7842 59.0829 80.7425 55.7351 80.4959 51.8587C79.6155 37.6568 78.911 23.4551 78.1362 9.21803C77.9249 5.35217 74.5793 2.37435 70.7054 2.59284C66.8315 2.81133 63.838 6.14148 64.0845 10.0285Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M116.368 12.9187C107.353 26.5215 97.1399 39.0669 86.8564 51.7534C84.3912 54.784 84.8488 59.2245 87.8775 61.6561C90.9062 64.1229 95.3438 63.6647 97.7738 60.634C108.339 47.6303 118.834 34.6971 128.131 20.7067C130.279 17.4646 129.363 13.095 126.123 10.9453C122.919 8.79564 118.516 9.67664 116.368 12.9187Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M151.292 63.488C126.851 64.5805 100.896 64.6157 76.455 63.0652C72.5811 62.8537 69.2355 65.7787 68.989 69.6904C68.7424 73.5668 71.7007 76.9146 75.5746 77.1613C100.509 78.7119 126.992 78.6766 151.926 77.5841C155.8 77.4079 158.828 74.0955 158.652 70.2191C158.476 66.3426 155.166 63.3118 151.292 63.488Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.14 67.9634C78.213 86.4294 93.8145 104.543 107.796 123.855C110.085 126.991 114.487 127.696 117.657 125.405C120.791 123.114 121.495 118.709 119.206 115.573C105.049 96.0498 89.2716 77.7249 74.0225 59.0476C71.5573 56.0521 67.1197 55.5941 64.1262 58.0609C61.0975 60.5278 60.6748 64.968 63.14 67.9634Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M67.7049 73.3209C71.6492 92.5621 72.741 110.958 73.0228 130.446C73.058 134.322 76.2628 137.423 80.1367 137.388C84.0459 137.317 87.1449 134.146 87.0745 130.234C86.7927 109.83 85.6307 90.6239 81.5103 70.4665C80.7003 66.6605 77.0025 64.1935 73.1638 65.0041C69.3603 65.7794 66.8949 69.515 67.7049 73.3209Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.3407 71.7714C56.9303 94.6071 51.049 119.98 38.8286 142.322C36.962 145.706 38.2296 150.005 41.6457 151.872C45.0618 153.74 49.3234 152.471 51.1899 149.088C63.4808 126.605 69.4323 101.091 80.9484 78.0793C82.6741 74.5906 81.2653 70.3617 77.814 68.5997C74.3275 66.8729 70.1016 68.2826 68.3407 71.7714Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.6204 66.5888C51.9052 70.6062 29.2252 72.4387 6.36913 75.1522C2.49522 75.6103 -0.251738 79.0992 0.206088 82.9756C0.663914 86.852 4.15076 89.6008 8.02467 89.1427C31.1273 86.4292 54.089 84.5261 77.0859 80.4735C80.8894 79.7687 83.4603 76.1037 82.7911 72.2977C82.0868 68.4565 78.4591 65.884 74.6204 66.5888Z"
              fill="#4FFFEB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M90.4272 55.8781C85.7432 55.6666 81.3058 55.3494 76.7275 54.6798C72.8536 54.116 69.2966 56.7942 68.7331 60.6354C68.1697 64.4766 70.846 68.0712 74.6847 68.635C79.756 69.3751 84.6513 69.7275 89.7931 69.9389C93.667 70.1151 96.9773 67.1196 97.1181 63.2079C97.2942 59.3315 94.3011 56.0543 90.4272 55.8781Z"
              fill="#4FFFEB"
            />
          </svg>
        </div>
        <div className="container px-4 mx-auto py-32">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[#36FFE8] rounded-3xl px-5 pt-12 pb-8 relative">
              <div>
                <h4 className="font-raleway font-bold text-4xl">
                  Made for your listening pleasure
                </h4>
                <h4 className="font-bold text-xl mt-6">
                  Listen to amazing podcasts
                </h4>
                <p className="mt-2 leading-relaxed">
                  You can keep your current host and still benefit from Wokpa's
                  free growth tools, like analytics and fan engagement. Learn
                  how to expand your audience on Spotify and build a community
                  around your content.
                </p>
                <div className="mt-6">
                  <Button className="text-sm font-semibold font-inter !from-white !to-white !text-[#042946] !py-2">
                    Start listening
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 pb-8 pr-6">
                <svg
                  width="59"
                  height="30"
                  viewBox="0 0 59 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3048_90103)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M55.5968 4.30953C44.7688 24.4441 23.1386 32.6299 3.04881 21.2946C2.38001 20.9172 1.53191 21.1532 1.15446 21.8137C0.777011 22.486 1.01294 23.3353 1.68174 23.7127C23.2152 35.8737 46.439 27.2042 58.0455 5.63059C58.4088 4.95826 58.1552 4.10889 57.4794 3.74323C56.8035 3.38937 55.9601 3.63719 55.5968 4.30953Z"
                      fill="#36FFE8"
                    />
                    <path
                      d="M19.9539 12.6594C22.1906 12.6594 24.0039 10.8462 24.0039 8.60944C24.0039 6.37271 22.1906 4.55952 19.9539 4.55952C17.7172 4.55952 15.904 6.37271 15.904 8.60944C15.904 10.8462 17.7172 12.6594 19.9539 12.6594Z"
                      fill="#36FFE8"
                    />
                    <path
                      d="M36.7212 8.3512C38.9142 8.3512 40.6921 6.57345 40.6921 4.38043C40.6921 2.18742 38.9142 0.409668 36.7212 0.409668C34.5282 0.409668 32.7504 2.18742 32.7504 4.38043C32.7504 6.57345 34.5282 8.3512 36.7212 8.3512Z"
                      fill="#36FFE8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3048_90103">
                      <rect
                        width="57.6923"
                        height="30"
                        fill="white"
                        transform="translate(0.974609)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="border border-[#36FFE8] rounded-3xl px-5 pt-12 pb-8 relative">
              <div>
                <h4 className="font-raleway font-bold text-4xl">
                  Ready to podcast?
                </h4>
                <h4 className="font-bold text-xl mt-6">
                  Create and host your show here
                </h4>
                <p className="mt-2 leading-relaxed">
                  Enjoy unlimited hosting and distribute your podcast
                  everywhere. Take advantage of our all-in-one, free platform
                  with recording, editing, analytics, fan engagement, and
                  monetization tools.
                </p>
                <div className="mt-6">
                  <Button className="text-sm font-semibold font-inter !from-white !to-white !text-[#042946] !py-2">
                    Start listening
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 pb-8 pr-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2894_89132)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.39665 17.5814C7.17011 16.9495 9.03636 16.1096 10.4755 14.8936C12.1848 13.4494 12.8799 11.5893 13.3467 9.63139C13.946 7.11593 14.1855 4.43634 14.9122 1.9168C15.1813 0.981148 15.6991 0.627469 15.9213 0.470507C16.4829 0.0740266 17.0505 -0.0319525 17.5846 0.00779754C18.2176 0.0536629 19.087 0.293166 19.6588 1.35418C19.7403 1.50605 19.8463 1.73743 19.9176 2.05441C19.9696 2.28679 20.0033 3.01349 20.0583 3.31314C20.1959 4.05107 20.3111 4.78902 20.4191 5.53102C20.7789 8.00061 20.9858 10.0982 22.1223 12.367C23.6644 15.4471 25.2095 17.3316 27.3051 18.1664C29.3313 18.9736 31.754 18.8218 34.8494 18.1889C35.144 18.1175 35.4354 18.0563 35.7239 18.0064C37.0886 17.7679 38.3932 18.6638 38.6613 20.0235C38.9294 21.3821 38.062 22.7061 36.7095 23.0047C36.4272 23.0669 36.1489 23.126 35.8737 23.18C31.6908 24.2155 26.8484 27.9113 24.0343 31.1473C23.167 32.1452 21.897 34.9348 20.6016 36.7144C19.6455 38.0271 18.5712 38.8925 17.6692 39.1982C17.0648 39.4041 16.5552 39.3726 16.1343 39.2686C15.5227 39.1177 15.0152 38.7864 14.6258 38.2595C14.4138 37.9711 14.2171 37.5848 14.1233 37.0915C14.0785 36.854 14.0734 36.2506 14.0744 35.9775C13.8104 35.0694 13.4873 34.1826 13.2519 33.2663C12.6903 31.0801 11.5885 29.6959 10.2798 27.8674C9.0557 26.1561 7.74094 25.0809 5.81357 24.2227C5.56284 24.1615 3.53966 23.6662 2.82518 23.3818C1.78149 22.9649 1.28408 22.2668 1.10367 21.8907C0.796886 21.2526 0.765318 20.6951 0.826472 20.2304C0.917183 19.5444 1.22499 18.9574 1.7713 18.4834C2.10969 18.1889 2.61523 17.9024 3.292 17.7628C3.81486 17.6537 5.20198 17.5906 5.39665 17.5814ZM17.2656 14.0181C17.3594 14.2271 17.4593 14.437 17.5653 14.649C19.8239 19.1602 22.3495 21.6787 25.4195 22.9007L25.5224 22.9405C23.4687 24.4653 21.6096 26.1694 20.1887 27.8032C19.6037 28.4759 18.8291 29.8733 17.9923 31.3063C17.232 28.8347 15.9885 27.0878 14.425 24.9015C13.2305 23.233 11.9789 21.9773 10.4409 20.954C11.6344 20.3415 12.7728 19.6239 13.7646 18.7861C15.4157 17.3908 16.5073 15.7743 17.2656 14.0181Z"
                      fill="#36FFE8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2894_89132">
                      <rect
                        width="39"
                        height="40"
                        fill="white"
                        transform="translate(0.332031)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="border border-[#36FFE8] rounded-3xl px-5 pt-12 pb-8 relative">
              <div>
                <h4 className="font-raleway font-bold text-4xl">
                  Already podcasting?
                </h4>
                <h4 className="font-bold text-xl mt-6">
                  Keep your host and get free growth tools
                </h4>
                <p className="mt-2 leading-relaxed">
                  You can keep your current host and still benefit from Wokpa’s
                  free growth tools, like analytics and fan engagement. Learn
                  how to expand your audience on Spotify and build a community
                  around your content.
                </p>
                <div className="mt-6">
                  <Button className="text-sm font-semibold font-inter !from-white !to-white !text-[#042946] !py-2">
                    Start listening
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 pb-8 pr-6">
                <svg
                  width="37"
                  height="40"
                  viewBox="0 0 37 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5842 36.9965C9.15563 36.0343 5.56603 35.549 2.08389 35.1043C1.33389 35.0111 0.637563 35.5313 0.583992 36.2641C0.476849 36.9975 1.01288 37.6682 1.70931 37.7615C5.08431 38.1895 8.56613 38.6475 11.834 39.5738C12.5304 39.7747 13.2807 39.3611 13.495 38.6497C13.7093 37.9388 13.2806 37.1979 12.5842 36.9965Z"
                    fill="#36FFE8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.9766 23.3556C17.4588 17.7247 11.2445 12.8186 5.83376 7.03663C5.35162 6.49663 4.49447 6.4677 3.95876 6.9718C3.42304 7.47645 3.36968 8.32502 3.9054 8.86502C9.31611 14.6636 15.5304 19.5857 21.0483 25.2332C21.584 25.7604 22.4409 25.7679 22.9766 25.2493C23.4588 24.7313 23.5123 23.8827 22.9766 23.3556Z"
                    fill="#36FFE8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.3171 1.69717C33.4779 4.92003 33.6383 8.14288 33.799 11.3663C33.799 12.1045 34.4421 12.6745 35.1921 12.6386C35.9421 12.6022 36.4775 11.9738 36.4775 11.235C36.3168 8.00681 36.1564 4.77913 35.9957 1.55145C35.9421 0.81324 35.2992 0.24699 34.5492 0.287169C33.8528 0.327347 33.2636 0.959492 33.3171 1.69717Z"
                    fill="#36FFE8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllInOne />
      <TrendingEpisodes />
      <PodcastYouLike />
      <section className="relative bg-[#141414]">
        <div className="absolute left-0 -top-10">
          <svg
            width="213"
            height="176"
            viewBox="0 0 213 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200.904 115.922C201.208 116.692 202.08 117.069 202.85 116.765C203.621 116.46 203.998 115.588 203.693 114.818L200.904 115.922ZM89.2248 101.275L88.9036 102.74L88.904 102.74L89.2248 101.275ZM123.13 44.0481L121.923 44.9389L121.923 44.939L123.13 44.0481ZM11.6845 97.5159C11.4802 98.3188 11.9655 99.1352 12.7683 99.3394C13.5712 99.5437 14.3876 99.0584 14.5919 98.2556L11.6845 97.5159ZM209.586 102.518C209.864 101.737 209.457 100.879 208.676 100.601C207.896 100.323 207.038 100.731 206.76 101.511L209.586 102.518ZM202.94 116.706L202.621 118.172C203.359 118.332 204.1 117.92 204.353 117.209L202.94 116.706ZM187.725 112.192C186.902 112.101 186.16 112.694 186.069 113.518C185.977 114.341 186.571 115.082 187.394 115.174L187.725 112.192ZM202.298 115.37C203.693 114.818 203.693 114.817 203.692 114.816C203.692 114.815 203.691 114.814 203.691 114.813C203.69 114.81 203.688 114.807 203.687 114.802C203.683 114.792 203.677 114.779 203.67 114.761C203.656 114.726 203.635 114.675 203.608 114.608C203.554 114.474 203.473 114.277 203.366 114.022C203.152 113.512 202.833 112.769 202.411 111.826C201.567 109.939 200.309 107.252 198.649 104.037C195.331 97.6092 190.394 89.0484 183.922 80.5361C171.036 63.585 151.77 46.4513 126.822 47.403L126.937 50.4009C150.361 49.5072 168.805 65.6075 181.534 82.3517C187.871 90.687 192.719 99.0892 195.983 105.413C197.615 108.573 198.848 111.208 199.672 113.051C200.084 113.972 200.394 114.694 200.6 115.184C200.702 115.429 200.779 115.616 200.83 115.74C200.855 115.802 200.874 115.849 200.886 115.879C200.893 115.895 200.897 115.906 200.9 115.913C200.901 115.917 200.902 115.919 200.903 115.921C200.903 115.921 200.903 115.922 200.904 115.922C200.904 115.922 200.904 115.922 202.298 115.37ZM126.822 47.403C102.123 48.3453 87.1654 60.6298 81.0302 73.4835C77.9782 79.8778 77.0908 86.467 78.3775 91.843C79.6758 97.2678 83.2229 101.494 88.9036 102.74L89.5461 99.8096C85.1885 98.8541 82.3768 95.6642 81.2951 91.1447C80.2017 86.5765 80.913 80.6936 83.7376 74.7757C89.3559 63.0049 103.264 51.304 126.937 50.4009L126.822 47.403ZM88.904 102.74C94.3732 103.938 100.691 102.578 106.655 99.5753C112.641 96.5614 118.419 91.8216 122.866 86.0167C131.771 74.3911 135.47 58.2362 124.337 43.1571L121.923 44.939C132.043 58.6459 128.826 73.3022 120.484 84.1924C116.307 89.6453 110.879 94.0895 105.306 96.8958C99.7091 99.7134 94.1135 100.81 89.5457 99.8095L88.904 102.74ZM124.337 43.1573C118.683 35.4974 109.548 31.6912 99.045 31.0609C88.544 30.4307 76.5357 32.9561 64.8272 38.1084C41.4306 48.404 18.8445 69.371 11.6845 97.5159L14.5919 98.2556C21.4694 71.2208 43.2567 50.8781 66.0355 40.8543C77.4146 35.8469 88.9444 33.4602 98.8652 34.0555C108.784 34.6508 116.955 38.2078 121.923 44.9389L124.337 43.1573ZM206.76 101.511L201.527 116.203L204.353 117.209L209.586 102.518L206.76 101.511ZM202.94 116.706C203.259 115.24 203.259 115.24 203.259 115.24C203.259 115.24 203.259 115.24 203.259 115.24C203.258 115.24 203.258 115.24 203.257 115.24C203.256 115.239 203.253 115.239 203.25 115.238C203.244 115.237 203.235 115.235 203.223 115.232C203.2 115.227 203.165 115.22 203.119 115.21C203.027 115.19 202.893 115.161 202.721 115.124C202.377 115.049 201.882 114.943 201.279 114.814C200.073 114.557 198.432 114.21 196.696 113.852C193.263 113.145 189.335 112.371 187.725 112.192L187.394 115.174C188.832 115.333 192.594 116.07 196.091 116.79C197.818 117.146 199.451 117.492 200.653 117.748C201.253 117.876 201.746 117.982 202.088 118.056C202.259 118.093 202.393 118.122 202.483 118.142C202.529 118.152 202.563 118.159 202.586 118.164C202.598 118.167 202.607 118.168 202.613 118.17C202.616 118.17 202.618 118.171 202.619 118.171C202.62 118.171 202.62 118.171 202.621 118.172C202.621 118.172 202.621 118.172 202.621 118.172C202.621 118.172 202.621 118.172 202.94 116.706Z"
              fill="#4FFFEB"
            />
          </svg>
        </div>
        <div className="container  px-4 mx-auto py-24">
          <div className="text-center">
            <h2 className="md:text-5xl text-4xl font-raleway font-bold">
              Use cases
            </h2>
          </div>
          <div className="mt-10  mx-auto px-4">
            <div className="space-y-16 mt-16">
              <div className="flex md:flex-row flex-col gap-4 md:gap-24 items-center">
                <div className="md:w-6/12">
                  <div className="text-left">
                    <h2 className="md:text-4xl text-2xl font-raleway font-bold">
                      Radio Stations
                    </h2>
                    <p className="md:text-xl text-sm max-w-4xl mx-auto mt-6">
                      Wokpa records audio mp3 to give you the picture-perfect
                      quality that your video podcast deserves.Record in 16-bit
                      48k WAV audio track per guest, regardless of internet
                      connection (local recording), with no time limits.
                    </p>
                    <div className="mt-4">
                      <Button className="text-sm !py-2 from-white to-white font-medium !text-secondary md:w-auto w-full">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={"/images/radio-stations-image.png"}
                    alt=""
                    width={567}
                    height={300}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 md:gap-24 items-center">
                <div className="">
                  <img
                    src={"/images/religious-image.png"}
                    alt=""
                    width={567}
                    height={300}
                  />
                </div>
                <div className="md:w-6/12">
                  <div className="text-left">
                    <h2 className="md:text-4xl text-2xl font-raleway font-bold">
                      Religious Groups
                    </h2>
                    <p className="md:text-xl text-sm max-w-4xl mx-auto mt-6">
                      Wokpa records audio mp3 to give you the picture-perfect
                      quality that your video podcast deserves.Record in 16-bit
                      48k WAV audio track per guest, regardless of internet
                      connection (local recording), with no time limits.
                    </p>
                    <div className="mt-4">
                      <Button className="text-sm !py-2 from-white to-white font-medium !text-secondary md:w-auto w-full">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 md:gap-24 items-center">
                <div className="md:w-6/12">
                  <div className="text-left">
                    <h2 className="md:text-4xl text-2xl font-raleway font-bold">
                      Media Organizations
                    </h2>
                    <p className="md:text-xl text-sm max-w-4xl mx-auto mt-6">
                      Wokpa records audio mp3 to give you the picture-perfect
                      quality that your video podcast deserves.Record in 16-bit
                      48k WAV audio track per guest, regardless of internet
                      connection (local recording), with no time limits.
                    </p>
                    <div className="mt-4">
                      <Button className="text-sm !py-2 from-white to-white font-medium !text-secondary md:w-auto w-full">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    src={"/images/media-image.png"}
                    alt=""
                    width={567}
                    height={300}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 md:gap-24 items-center">
                <div className="">
                  <img
                    src={"/images/indie-image.png"}
                    alt=""
                    width={567}
                    height={300}
                  />
                </div>
                <div className="md:w-6/12">
                  <div className="text-left">
                    <h2 className="md:text-4xl text-2xl font-raleway font-bold">
                      Indie Podcasters
                    </h2>
                    <p className="md:text-xl text-sm max-w-4xl mx-auto mt-6">
                      Wokpa records audio mp3 to give you the picture-perfect
                      quality that your video podcast deserves.Record in 16-bit
                      48k WAV audio track per guest, regardless of internet
                      connection (local recording), with no time limits.
                    </p>
                    <div className="mt-4">
                      <Button className="text-sm !py-2 from-white to-white font-medium !text-secondary md:w-auto w-full">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#E5F5F4]">
        <div className="container  px-4 mx-auto py-24">
          <div className="flex md:flex-row flex-col md:gap-0 gap-12">
            <div className="md:w-6/12">
              <div className="text-[#101828]">
                <h2 className="md:text-4xl text-3xl font-raleway font-bold">
                  How it works
                </h2>
                <p className="max-w-4xl md:text-base tex-sm mt-6">
                  Wokpa records audio mp3 to give you the picture-perfect
                  quality that your video podcast deserves.
                </p>

                <div className="mt-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4100_41059)">
                          <path
                            d="M8.75065 13.9997L12.2507 17.4997L19.2507 10.4997M25.6673 13.9997C25.6673 20.443 20.444 25.6663 14.0007 25.6663C7.55733 25.6663 2.33398 20.443 2.33398 13.9997C2.33398 7.55635 7.55733 2.33301 14.0007 2.33301C20.444 2.33301 25.6673 7.55635 25.6673 13.9997Z"
                            stroke="#0D8478"
                            strokeWidth="2.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4100_41059">
                            <rect width="28" height="28" rx="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="">Leverage automation to move fast</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4100_41059)">
                          <path
                            d="M8.75065 13.9997L12.2507 17.4997L19.2507 10.4997M25.6673 13.9997C25.6673 20.443 20.444 25.6663 14.0007 25.6663C7.55733 25.6663 2.33398 20.443 2.33398 13.9997C2.33398 7.55635 7.55733 2.33301 14.0007 2.33301C20.444 2.33301 25.6673 7.55635 25.6673 13.9997Z"
                            stroke="#0D8478"
                            strokeWidth="2.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4100_41059">
                            <rect width="28" height="28" rx="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="">Leverage automation to move fast</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4100_41059)">
                          <path
                            d="M8.75065 13.9997L12.2507 17.4997L19.2507 10.4997M25.6673 13.9997C25.6673 20.443 20.444 25.6663 14.0007 25.6663C7.55733 25.6663 2.33398 20.443 2.33398 13.9997C2.33398 7.55635 7.55733 2.33301 14.0007 2.33301C20.444 2.33301 25.6673 7.55635 25.6673 13.9997Z"
                            stroke="#0D8478"
                            strokeWidth="2.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4100_41059">
                            <rect width="28" height="28" rx="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="">Leverage automation to move fast</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4100_41059)">
                          <path
                            d="M8.75065 13.9997L12.2507 17.4997L19.2507 10.4997M25.6673 13.9997C25.6673 20.443 20.444 25.6663 14.0007 25.6663C7.55733 25.6663 2.33398 20.443 2.33398 13.9997C2.33398 7.55635 7.55733 2.33301 14.0007 2.33301C20.444 2.33301 25.6673 7.55635 25.6673 13.9997Z"
                            stroke="#0D8478"
                            strokeWidth="2.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4100_41059">
                            <rect width="28" height="28" rx="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="">Leverage automation to move fast</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4100_41059)">
                          <path
                            d="M8.75065 13.9997L12.2507 17.4997L19.2507 10.4997M25.6673 13.9997C25.6673 20.443 20.444 25.6663 14.0007 25.6663C7.55733 25.6663 2.33398 20.443 2.33398 13.9997C2.33398 7.55635 7.55733 2.33301 14.0007 2.33301C20.444 2.33301 25.6673 7.55635 25.6673 13.9997Z"
                            stroke="#0D8478"
                            strokeWidth="2.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4100_41059">
                            <rect width="28" height="28" rx="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="">Leverage automation to move fast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-6/12">
              <img
                src={"/images/how-it-works-image.png"}
                alt=""
                width={700}
                height={536}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container px-4 mx-auto py-24">
          <div className="bg-white rounded-3xl flex md:flex-row flex-col items-center">
            <div className="md:px-16 px-6 flex-1 md:py-0 py-16">
              <div className="space-y-6">
                <svg
                  width="116"
                  height="20"
                  viewBox="0 0 116 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4100_46477)">
                    <path
                      d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                      fill="#F2F4F7"
                    />
                    <g clipPath="url(#clip1_4100_46477)">
                      <path
                        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
                        fill="#FEC84B"
                      />
                    </g>
                  </g>
                  <g clipPath="url(#clip2_4100_46477)">
                    <path
                      d="M33.5383 1.60996C33.7091 1.19932 34.2909 1.19932 34.4617 1.60996L36.5278 6.57744C36.5998 6.75056 36.7626 6.86885 36.9495 6.88383L42.3123 7.31376C42.7556 7.3493 42.9354 7.90256 42.5976 8.19189L38.5117 11.6919C38.3693 11.8139 38.3071 12.0053 38.3506 12.1876L39.5989 17.4208C39.7021 17.8534 39.2315 18.1954 38.8519 17.9635L34.2606 15.1592C34.1006 15.0615 33.8994 15.0615 33.7394 15.1592L29.1481 17.9635C28.7685 18.1954 28.2979 17.8534 28.4011 17.4208L29.6494 12.1876C29.6929 12.0053 29.6307 11.8139 29.4883 11.6919L25.4024 8.19189C25.0646 7.90256 25.2444 7.3493 25.6877 7.31376L31.0505 6.88383C31.2374 6.86885 31.4002 6.75056 31.4722 6.57744L33.5383 1.60996Z"
                      fill="#F2F4F7"
                    />
                    <g clipPath="url(#clip3_4100_46477)">
                      <path
                        d="M33.5383 1.60996C33.7091 1.19932 34.2909 1.19932 34.4617 1.60996L36.5278 6.57744C36.5998 6.75056 36.7626 6.86885 36.9495 6.88383L42.3123 7.31376C42.7556 7.3493 42.9354 7.90256 42.5976 8.19189L38.5117 11.6919C38.3693 11.8139 38.3071 12.0053 38.3506 12.1876L39.5989 17.4208C39.7021 17.8534 39.2315 18.1954 38.8519 17.9635L34.2606 15.1592C34.1006 15.0615 33.8994 15.0615 33.7394 15.1592L29.1481 17.9635C28.7685 18.1954 28.2979 17.8534 28.4011 17.4208L29.6494 12.1876C29.6929 12.0053 29.6307 11.8139 29.4883 11.6919L25.4024 8.19189C25.0646 7.90256 25.2444 7.3493 25.6877 7.31376L31.0505 6.88383C31.2374 6.86885 31.4002 6.75056 31.4722 6.57744L33.5383 1.60996Z"
                        fill="#FEC84B"
                      />
                    </g>
                  </g>
                  <g clipPath="url(#clip4_4100_46477)">
                    <path
                      d="M57.5383 1.60996C57.7091 1.19932 58.2909 1.19932 58.4617 1.60996L60.5278 6.57744C60.5998 6.75056 60.7626 6.86885 60.9495 6.88383L66.3123 7.31376C66.7556 7.3493 66.9354 7.90256 66.5976 8.19189L62.5117 11.6919C62.3693 11.8139 62.3071 12.0053 62.3506 12.1876L63.5989 17.4208C63.7021 17.8534 63.2315 18.1954 62.8519 17.9635L58.2606 15.1592C58.1006 15.0615 57.8994 15.0615 57.7394 15.1592L53.1481 17.9635C52.7685 18.1954 52.2979 17.8534 52.4011 17.4208L53.6494 12.1876C53.6929 12.0053 53.6307 11.8139 53.4883 11.6919L49.4024 8.19189C49.0646 7.90256 49.2444 7.3493 49.6877 7.31376L55.0505 6.88383C55.2374 6.86885 55.4002 6.75056 55.4722 6.57744L57.5383 1.60996Z"
                      fill="#F2F4F7"
                    />
                    <g clipPath="url(#clip5_4100_46477)">
                      <path
                        d="M57.5383 1.60996C57.7091 1.19932 58.2909 1.19932 58.4617 1.60996L60.5278 6.57744C60.5998 6.75056 60.7626 6.86885 60.9495 6.88383L66.3123 7.31376C66.7556 7.3493 66.9354 7.90256 66.5976 8.19189L62.5117 11.6919C62.3693 11.8139 62.3071 12.0053 62.3506 12.1876L63.5989 17.4208C63.7021 17.8534 63.2315 18.1954 62.8519 17.9635L58.2606 15.1592C58.1006 15.0615 57.8994 15.0615 57.7394 15.1592L53.1481 17.9635C52.7685 18.1954 52.2979 17.8534 52.4011 17.4208L53.6494 12.1876C53.6929 12.0053 53.6307 11.8139 53.4883 11.6919L49.4024 8.19189C49.0646 7.90256 49.2444 7.3493 49.6877 7.31376L55.0505 6.88383C55.2374 6.86885 55.4002 6.75056 55.4722 6.57744L57.5383 1.60996Z"
                        fill="#FEC84B"
                      />
                    </g>
                  </g>
                  <g clipPath="url(#clip6_4100_46477)">
                    <path
                      d="M81.5383 1.60996C81.7091 1.19932 82.2909 1.19932 82.4617 1.60996L84.5278 6.57744C84.5998 6.75056 84.7626 6.86885 84.9495 6.88383L90.3123 7.31376C90.7556 7.3493 90.9354 7.90256 90.5976 8.19189L86.5117 11.6919C86.3693 11.8139 86.3071 12.0053 86.3506 12.1876L87.5989 17.4208C87.7021 17.8534 87.2315 18.1954 86.8519 17.9635L82.2606 15.1592C82.1006 15.0615 81.8994 15.0615 81.7394 15.1592L77.1481 17.9635C76.7685 18.1954 76.2979 17.8534 76.4011 17.4208L77.6494 12.1876C77.6929 12.0053 77.6307 11.8139 77.4883 11.6919L73.4024 8.19189C73.0646 7.90256 73.2444 7.3493 73.6877 7.31376L79.0505 6.88383C79.2374 6.86885 79.4002 6.75056 79.4722 6.57744L81.5383 1.60996Z"
                      fill="#F2F4F7"
                    />
                    <g clipPath="url(#clip7_4100_46477)">
                      <path
                        d="M81.5383 1.60996C81.7091 1.19932 82.2909 1.19932 82.4617 1.60996L84.5278 6.57744C84.5998 6.75056 84.7626 6.86885 84.9495 6.88383L90.3123 7.31376C90.7556 7.3493 90.9354 7.90256 90.5976 8.19189L86.5117 11.6919C86.3693 11.8139 86.3071 12.0053 86.3506 12.1876L87.5989 17.4208C87.7021 17.8534 87.2315 18.1954 86.8519 17.9635L82.2606 15.1592C82.1006 15.0615 81.8994 15.0615 81.7394 15.1592L77.1481 17.9635C76.7685 18.1954 76.2979 17.8534 76.4011 17.4208L77.6494 12.1876C77.6929 12.0053 77.6307 11.8139 77.4883 11.6919L73.4024 8.19189C73.0646 7.90256 73.2444 7.3493 73.6877 7.31376L79.0505 6.88383C79.2374 6.86885 79.4002 6.75056 79.4722 6.57744L81.5383 1.60996Z"
                        fill="#FEC84B"
                      />
                    </g>
                  </g>
                  <g clipPath="url(#clip8_4100_46477)">
                    <path
                      d="M105.538 1.60996C105.709 1.19932 106.291 1.19932 106.462 1.60996L108.528 6.57744C108.6 6.75056 108.763 6.86885 108.949 6.88383L114.312 7.31376C114.756 7.3493 114.935 7.90256 114.598 8.19189L110.512 11.6919C110.369 11.8139 110.307 12.0053 110.351 12.1876L111.599 17.4208C111.702 17.8534 111.231 18.1954 110.852 17.9635L106.261 15.1592C106.101 15.0615 105.899 15.0615 105.739 15.1592L101.148 17.9635C100.769 18.1954 100.298 17.8534 100.401 17.4208L101.649 12.1876C101.693 12.0053 101.631 11.8139 101.488 11.6919L97.4024 8.19189C97.0646 7.90256 97.2444 7.3493 97.6877 7.31376L103.051 6.88383C103.237 6.86885 103.4 6.75056 103.472 6.57744L105.538 1.60996Z"
                      fill="#F2F4F7"
                    />
                    <g clipPath="url(#clip9_4100_46477)">
                      <path
                        d="M105.538 1.60996C105.709 1.19932 106.291 1.19932 106.462 1.60996L108.528 6.57744C108.6 6.75056 108.763 6.86885 108.949 6.88383L114.312 7.31376C114.756 7.3493 114.935 7.90256 114.598 8.19189L110.512 11.6919C110.369 11.8139 110.307 12.0053 110.351 12.1876L111.599 17.4208C111.702 17.8534 111.231 18.1954 110.852 17.9635L106.261 15.1592C106.101 15.0615 105.899 15.0615 105.739 15.1592L101.148 17.9635C100.769 18.1954 100.298 17.8534 100.401 17.4208L101.649 12.1876C101.693 12.0053 101.631 11.8139 101.488 11.6919L97.4024 8.19189C97.0646 7.90256 97.2444 7.3493 97.6877 7.31376L103.051 6.88383C103.237 6.86885 103.4 6.75056 103.472 6.57744L105.538 1.60996Z"
                        fill="#FEC84B"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4100_46477">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_4100_46477">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip2_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(24)"
                      />
                    </clipPath>
                    <clipPath id="clip3_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(24)"
                      />
                    </clipPath>
                    <clipPath id="clip4_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(48)"
                      />
                    </clipPath>
                    <clipPath id="clip5_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(48)"
                      />
                    </clipPath>
                    <clipPath id="clip6_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(72)"
                      />
                    </clipPath>
                    <clipPath id="clip7_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(72)"
                      />
                    </clipPath>
                    <clipPath id="clip8_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(96)"
                      />
                    </clipPath>
                    <clipPath id="clip9_4100_46477">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(96)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="">
                  <h1 className="font-raleway text-4xl font-medium text-[#101828]">
                    Love the simplicity of the service and the prompt customer
                    support. We can’t imagine working without it.
                  </h1>
                </div>
                <div>
                  <h6 className="text-lg font-semibold text-[#101828]">
                    — Renee Wells
                  </h6>
                  <p className="text-[#667085] mt-1">Podcaster, ABR</p>
                </div>
              </div>
            </div>
            <div className="md:w-[480px]">
              <img
                className="md:rounded-r-3xl"
                src={"/images/simplicity-image.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#141414]">
        <div className="absolute left-0 -top-10">
          <svg
            width="213"
            height="176"
            viewBox="0 0 213 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M200.904 115.922C201.208 116.692 202.08 117.069 202.85 116.765C203.621 116.46 203.998 115.588 203.693 114.818L200.904 115.922ZM89.2248 101.275L88.9036 102.74L88.904 102.74L89.2248 101.275ZM123.13 44.0481L121.923 44.9389L121.923 44.939L123.13 44.0481ZM11.6845 97.5159C11.4802 98.3188 11.9655 99.1352 12.7683 99.3394C13.5712 99.5437 14.3876 99.0584 14.5919 98.2556L11.6845 97.5159ZM209.586 102.518C209.864 101.737 209.457 100.879 208.676 100.601C207.896 100.323 207.038 100.731 206.76 101.511L209.586 102.518ZM202.94 116.706L202.621 118.172C203.359 118.332 204.1 117.92 204.353 117.209L202.94 116.706ZM187.725 112.192C186.902 112.101 186.16 112.694 186.069 113.518C185.977 114.341 186.571 115.082 187.394 115.174L187.725 112.192ZM202.298 115.37C203.693 114.818 203.693 114.817 203.692 114.816C203.692 114.815 203.691 114.814 203.691 114.813C203.69 114.81 203.688 114.807 203.687 114.802C203.683 114.792 203.677 114.779 203.67 114.761C203.656 114.726 203.635 114.675 203.608 114.608C203.554 114.474 203.473 114.277 203.366 114.022C203.152 113.512 202.833 112.769 202.411 111.826C201.567 109.939 200.309 107.252 198.649 104.037C195.331 97.6092 190.394 89.0484 183.922 80.5361C171.036 63.585 151.77 46.4513 126.822 47.403L126.937 50.4009C150.361 49.5072 168.805 65.6075 181.534 82.3517C187.871 90.687 192.719 99.0892 195.983 105.413C197.615 108.573 198.848 111.208 199.672 113.051C200.084 113.972 200.394 114.694 200.6 115.184C200.702 115.429 200.779 115.616 200.83 115.74C200.855 115.802 200.874 115.849 200.886 115.879C200.893 115.895 200.897 115.906 200.9 115.913C200.901 115.917 200.902 115.919 200.903 115.921C200.903 115.921 200.903 115.922 200.904 115.922C200.904 115.922 200.904 115.922 202.298 115.37ZM126.822 47.403C102.123 48.3453 87.1654 60.6298 81.0302 73.4835C77.9782 79.8778 77.0908 86.467 78.3775 91.843C79.6758 97.2678 83.2229 101.494 88.9036 102.74L89.5461 99.8096C85.1885 98.8541 82.3768 95.6642 81.2951 91.1447C80.2017 86.5765 80.913 80.6936 83.7376 74.7757C89.3559 63.0049 103.264 51.304 126.937 50.4009L126.822 47.403ZM88.904 102.74C94.3732 103.938 100.691 102.578 106.655 99.5753C112.641 96.5614 118.419 91.8216 122.866 86.0167C131.771 74.3911 135.47 58.2362 124.337 43.1571L121.923 44.939C132.043 58.6459 128.826 73.3022 120.484 84.1924C116.307 89.6453 110.879 94.0895 105.306 96.8958C99.7091 99.7134 94.1135 100.81 89.5457 99.8095L88.904 102.74ZM124.337 43.1573C118.683 35.4974 109.548 31.6912 99.045 31.0609C88.544 30.4307 76.5357 32.9561 64.8272 38.1084C41.4306 48.404 18.8445 69.371 11.6845 97.5159L14.5919 98.2556C21.4694 71.2208 43.2567 50.8781 66.0355 40.8543C77.4146 35.8469 88.9444 33.4602 98.8652 34.0555C108.784 34.6508 116.955 38.2078 121.923 44.9389L124.337 43.1573ZM206.76 101.511L201.527 116.203L204.353 117.209L209.586 102.518L206.76 101.511ZM202.94 116.706C203.259 115.24 203.259 115.24 203.259 115.24C203.259 115.24 203.259 115.24 203.259 115.24C203.258 115.24 203.258 115.24 203.257 115.24C203.256 115.239 203.253 115.239 203.25 115.238C203.244 115.237 203.235 115.235 203.223 115.232C203.2 115.227 203.165 115.22 203.119 115.21C203.027 115.19 202.893 115.161 202.721 115.124C202.377 115.049 201.882 114.943 201.279 114.814C200.073 114.557 198.432 114.21 196.696 113.852C193.263 113.145 189.335 112.371 187.725 112.192L187.394 115.174C188.832 115.333 192.594 116.07 196.091 116.79C197.818 117.146 199.451 117.492 200.653 117.748C201.253 117.876 201.746 117.982 202.088 118.056C202.259 118.093 202.393 118.122 202.483 118.142C202.529 118.152 202.563 118.159 202.586 118.164C202.598 118.167 202.607 118.168 202.613 118.17C202.616 118.17 202.618 118.171 202.619 118.171C202.62 118.171 202.62 118.171 202.621 118.172C202.621 118.172 202.621 118.172 202.621 118.172C202.621 118.172 202.621 118.172 202.94 116.706Z"
              fill="#4FFFEB"
            />
          </svg>
        </div>
        <div className="container  px-4 mx-auto py-24">
          <div className="text-center">
            <h2 className="md:text-5xl text-3xl font-raleway font-medium">
              Frequently asked questions
            </h2>
            <p className="text-lg max-w-4xl mx-auto mt-6">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="mt-10 max-w-4xl  mx-auto px-4 space-y-6">
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <div
                    className={`md:p-8 p-4 rounded-2xl ${
                      open ? "bg-[#344054]" : ""
                    } text-left`}
                  >
                    <Disclosure.Button
                      onClick={() => {}}
                      className="md:text-lg font-medium md:font-semibold w-full"
                    >
                      <div className="flex md:flex-row justify-between md:justify-start flex-row-reverse gap-4">
                        <div>
                          {open ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>Is there a free trial available?</div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="md:pl-10 md:pr-12">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`md:p-8 p-4 rounded-2xl ${
                      open ? "bg-[#344054]" : ""
                    } text-left`}
                  >
                    <Disclosure.Button
                      onClick={() => {}}
                      className="md:text-lg font-medium md:font-semibold w-full"
                    >
                      <div className="flex md:flex-row justify-between md:justify-start flex-row-reverse gap-4">
                        <div>
                          {open ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>Can I change my plan later?</div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="md:pl-10 md:pr-12">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`md:p-8 p-4 rounded-2xl ${
                      open ? "bg-[#344054]" : ""
                    } text-left`}
                  >
                    <Disclosure.Button
                      onClick={() => {}}
                      className="md:text-lg font-medium md:font-semibold w-full"
                    >
                      <div className="flex md:flex-row justify-between md:justify-start flex-row-reverse gap-4">
                        <div>
                          {open ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>What is your cancellation policy</div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="md:pl-10 md:pr-12">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`md:p-8 p-4 rounded-2xl ${
                      open ? "bg-[#344054]" : ""
                    } text-left`}
                  >
                    <Disclosure.Button
                      onClick={() => {}}
                      className="md:text-lg font-medium md:font-semibold w-full"
                    >
                      <div className="flex md:flex-row justify-between md:justify-start flex-row-reverse gap-4">
                        <div>
                          {open ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="text-left ">
                          Can other info be added to an invoice?
                        </div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="md:pl-10 md:pr-12">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`md:p-8 p-4 rounded-2xl ${
                      open ? "bg-[#344054]" : ""
                    } text-left`}
                  >
                    <Disclosure.Button
                      onClick={() => {}}
                      className="md:text-lg font-medium md:font-semibold w-full"
                    >
                      <div className="flex md:flex-row justify-between md:justify-start flex-row-reverse gap-4">
                        <div>
                          {open ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>How does billing work?</div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="md:pl-10 md:pr-12">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <div
                    className={`md:p-8 p-4 rounded-2xl ${
                      open ? "bg-[#344054]" : ""
                    } text-left`}
                  >
                    <Disclosure.Button
                      onClick={() => {}}
                      className="md:text-lg font-medium md:font-semibold w-full"
                    >
                      <div className="flex md:flex-row justify-between md:justify-start flex-row-reverse gap-4">
                        <div>
                          {open ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="#98A2B3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>How do I change my account email?</div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="md:pl-10 md:pr-12">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
