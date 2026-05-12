import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

const String avatarPath = 'assets/images/ava soundcloud.jpg';
const String facebookUrl = 'https://www.facebook.com/xuan.thaii.1/';
const String discordUrl = 'https://discord.gg/BrJ8nKEWMp';
const String instagramUrl = 'https://www.instagram.com/xuaan_thais/';
const String shopUrl = 'https://collshp.com/ionlydategirlpho2912';
const String youtubeUrl = 'https://www.youtube.com/@redfIagswithoutL';
const String tiktokUrl = 'https://www.tiktok.com/@_.ionlydategirlpho_';

const String backgroundPath = 'assets/images/backgroundava2k.jpg';

Future<void> launchURL(String url) async {
  final uri = Uri.parse(url);
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  } else {
    debugPrint('Không thể mở URL: $url');
  }
}
