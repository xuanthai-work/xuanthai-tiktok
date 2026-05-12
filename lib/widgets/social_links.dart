import 'package:flutter/material.dart';
import '../suoc/link_file.dart';
import 'icon_link_button.dart';

class SocialLinks extends StatelessWidget {
  final double iconSize;
  final double spacing;
  final double runSpacing;
  final WrapAlignment alignment;

  const SocialLinks({
    super.key,
    this.iconSize = 50,
    this.spacing = 5,
    this.runSpacing = 5,
    this.alignment = WrapAlignment.center,
  });

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: spacing,
      runSpacing: runSpacing,
      alignment: alignment,
      children: [
        IconLinkButton(
            url: facebookUrl, iconPath: 'assets/images/facebook.png', size: iconSize),
        IconLinkButton(
            url: instagramUrl, iconPath: 'assets/images/instagramto.png', size: iconSize),
        IconLinkButton(
            url: youtubeUrl, iconPath: 'assets/images/youtube.png', size: iconSize),
        IconLinkButton(
            url: tiktokUrl, iconPath: 'assets/images/tik-tok.png', size: iconSize),
        IconLinkButton(
            url: discordUrl, iconPath: 'assets/images/discord.png', size: iconSize),
      ],
    );
  }
}
