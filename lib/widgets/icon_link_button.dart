import 'package:flutter/material.dart';
import '../suoc/link_file.dart';

class IconLinkButton extends StatelessWidget {
  final String url;
  final String iconPath;
  final double size;

  const IconLinkButton({
    super.key,
    required this.url,
    required this.iconPath,
    this.size = 50,
  });

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: () => launchURL(url),
      padding: EdgeInsets.zero,
      child: Image.asset(iconPath, width: size, height: size),
    );
  }
}
