---
id: voip
title: Voice over Internet Protocol (VoIP)
sidebar_label: Voice over Internet Protocol (VoIP)
slug: /voice-over-internet-protocol
---

## What is VoIP

Voice over Internet Protocol (VoIP), also known as IP telephony, facilitates phone calls over the Internet.

## Background

Let’s understand how our traditional landline phone systems used to work. Traditional systems were solely based on PSTN, Public Switched Telephone Network, which enabled our analog voice signals to transmit through wires, switches, and dedicated circuits from one place to the other. During a phone call, a dedicated circuit path and bandwidth were reserved among switches between one point and the other. For long-distance calls, we involved more switches, and that increased costs. That’s why in our earlier days, we paid more for long-distance and long-duration calls. With the evolution of the internet and data communications, we saw an opportunity to solve this problem, and with that, the idea of Voice over IP (VoIP) came into the picture.

## VoIP Architecture

VoIP promotes wireless technology and uses the concept of data communications over the Internet, i.e., Packet Switching Network. In a packet-switched network, data is broken down into small packets for transmission. These packets can take different routes to reach their destination, where they are reassembled into the original data. Unlike circuit-switched networks, where a dedicated communication path is established for the entire duration of a conversation, packet-switching allows for more efficient and flexible use of network resources, making it cheaper.

We have two types of VoIP calls:

### Type 1

When you’re calling from your internet device to another internet device: There are many apps available in the market to do this, such as WhatsApp/Skype, etc. This is almost free because between both devices, we have an IP network only, meaning the Internet network only, and we are not required to convert any analog to digital signals because computerized devices output digital signals only. So, even if you both are in different countries, this will not cost you any extra other than your internet data plan.

### Type 2

When landline to landline (Analog phone devices) or digital device to analog device: Here, we use the local area PSTN on both sides and utilize an IP network or cloud in the middle. We use gateways on both sides between respective PSTN and IP network. When you speak, your side gateway converts your analog PSTN signals to digital and IP packets and let them transmit over the IP network to your recipient. On the receiver's gateway, those packets are reassembled and sent to the local area PSTN of your recipient. Such digital signal processing (DSP) is the essential job of these Gateways to facilitate VoIP communications.

## VoIP Technology Adopters

In industries, VoIP calls are being used extensively by businesses for their enterprise-level private and exclusive communication needs. To enable this, Private Branch Exchange (PBX) comes into the picture. 

## Private Branch Exchange (PBX)

Private means it is equipment that serves private organizations instead of offering public services. Branch means it is a multi-station system that allows shared use of central office lines. Exchange reflects its primary function, which is to switch phone calls internally and externally. Basically, PBX works as the central server for a business-level telephone system and helps create private phone networks for companies or businesses for their official calls. It mainly does two things: establish calls among internal employees and manage external calls for the company.

All internal employees have phones, and their phones are connected to the PBX. Each phone will have a dedicated extension number Ext. 1002, 1003, etc. When you dial the exchange number of one of your colleagues, the PBX will establish the call between you and the destination extension accordingly. Here, we utilize the VoIP call Type 1 as mentioned in the above section.

To deal with external calls, we connect our PBX to local PSTN through phone lines applied by the service provider which comes with the phone number of the company. When someone in our company makes an outbound call, it goes to PBX; PBX will send it out through connected trunks; also known as phone lines; to the local PSTN and eventually will reach the customer. When someone calls our company, it goes to PSTN to our trunk to our PBX, and then PBX will deliver this call according to preset rules, e.g., specific ring group, particular extension, IVR, etc. PBX manages all incoming and outgoing calls. Here, we utilize the VoIP call Type 2 as mentioned in the above section.

There are many kinds of PBX from a technology perspective,

1. Traditional PBX working with telephone lines, i.e., it consists of a switchboard with physical lines that connect with the public switched telephone network (PSTN),
2. IPPBX that runs calls over the internet,
3. Cloud PBX deployed totally on the cloud and no longer required any hardware on-premise.

Traditional PBX was expensive hardware and mainly focused on call routing. IPPBX and cloud PBX offer more advanced features such as UC communication and more possibility of 3rd party integrations. In earlier traditional landline phone systems, individual telephone lines were connected to the traditional PBX located within the office building. Traditional PBX systems used switches and circuits to establish connections between internal phones and to route calls to the appropriate external phone lines when necessary. We didn’t have the concept of IP Network in the middle and only had PSTN all around, so it was expensive.

Since traditional landline systems are now being replaced by digital and VoIP (Voice over Internet Protocol) technologies, that’s why today we use IP PBX and cloud systems that operate over internet connections. These modern PBXs do not require on-premise installation and maintenance overhead.

## VoIP Codecs

You must have noticed during a few of your voice calls over the internet (WhatsApp, Skype, etc.) that sometimes you hear the other side late, sometimes the voice comes very fast, like too many words together quickly. The first happens due to latency issues in the packets delivery. The second happens due to too many packets delivered in an instant. All these are call quality-related issues that happen due to no dedicated reserved path and during packets transmission and their resolution, sometimes such issues occur over the IP due to intermittent network issues. So how to minimize such issues? For that, we have a concept of Codecs.

Codecs mean encoding and data compression. Codecs are used to convert analog signal voice to digital signals and compress it to the expected quality.

Post-compression, IP packets are generated and transmitted over the IP network. There are various types of codecs based on their compression. The more we compress, the lighter will be the data, and the data transfer in KBPS will be greater. But, with more compressions come quality compromises as well. So, we have to think about which compression or codec is suitable for a particular context or situation.

## Signaling Protocols for VoIP

To allow real-time communications, we have various signaling protocols:

1. H.323 - The first protocol designed for multimedia communications such as real-time audio, video, and data communications over IP networks.
2. SIP - Then this came, the Session Initiation Protocol. This is an Internet Engineering Task Force (IETF) protocol. It is lighter (requires less bandwidth) and text-based. It is specifically designed for voice/audio. H.323 was for multipurpose and thus was heavyweight. Before you can actually start your communication with your colleague on a phone call, your phone must talk to the other phone first to establish a communication session through a series of signals. When you dial an extension number, your phone sends an Invitation through the SIP server to your colleague's phone. It will be ringing if the destination phone is healthy and no network issues are there. When he picks up, his phone will send a notification acknowledgment, and your phone will respond back with a confirmation acknowledgment. And then both people will be allowed to speak. When calls are terminated, both phones send Bye Ack notifications so that they can update their current status. We use mobile, tablets, computers, etc., to communicate; their operating process may differ, and that’s why we require a standardized protocol, and SIP is that protocol only. In today’s VoIP communication services, we use SIP.
3. SCCP (Skinny client control protocol) - This is a Cisco proprietary protocol that works only for Cisco devices.

## The role of WebRTC in VoIP

WebRTC is a collection of APIs for multimedia management. We have SIP, then why WebRTC? Well, SIP is a protocol that focuses on establishing, negotiating, and terminating the data exchange. Protocols are just one specific part of an API, so SIP is just one potential subroutine that WebRTC can utilize. WebRTC is a broader thing, and SIP is specific to signaling. WebRTC uses SIP to establish and then works on retrieving and sharing audio between the clients by using several other protocols. These two technologies work together to enable VoIP-based real-time communications.

## VoIP Terminals

End devices/interfaces from where you establish or terminate a communication are called VoIP terminals. These are of different types:

1. Hardware phones (IP Telephone Sets) that connect to the internet through an ethernet cable.
2. Software-Based (Soft Phone interface) i.e., mobile app, web, and desktop application interfaces.
3. Traditional Phones by using an Analog Telephone Adapter where you have a phoneline inlet and internet line outlet. So, we use such adapters to convert normal phones to IP phones.

## VoIP Advantages

1. Free or cheap
2. Mobility because you can use the same number and software and the internet to talk to anyone from anywhere in the world. Traditional desk phones needed to connect to the traditional PBX box which was used to route calls to specific devices. These traditional PBXs used to be hidden inside your building server room. So you had to stay in the location to make and receive calls on your phone.

## VoIP Disadvantages

1. Installation cost is high (Phones’ high prices, software prices)
2. Low quality of service due to compression, no dedicated path/circuit, etc.
3. No Emergency Calls supported due to no well-rounded connection with PSTN and due to which exact location tracking is not possible. So, emergency call numbers will not work.
