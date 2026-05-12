import 'package:flutter/material.dart';

class BioInfo extends StatelessWidget {
  final double titleSize;
  final double subtitleSize;
  final bool showFooter;
  final double footerPadding;

  const BioInfo({
    super.key,
    this.titleSize = 50,
    this.subtitleSize = 16,
    this.showFooter = false,
    this.footerPadding = 50,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          "s1aht",
          style: TextStyle(
            fontFamily: 'Dancing Script',
            color: Colors.white,
            fontSize: titleSize,
          ),
        ),
        const SizedBox(height: 10),
        Text(
          "| Bonjour |",
          style: TextStyle(
            fontFamily: 'Zimra',
            color: Colors.white,
            fontSize: subtitleSize,
          ),
        ),
        if (showFooter) ...[
          SizedBox(height: footerPadding),
          const Text(
            "Weblink tôi tự code, anh em có góp ý gì hay cần gì thì mail tôi nhé!!!",
            style: TextStyle(color: Colors.white),
            textAlign: TextAlign.center,
          ),
          const Text(
            "< xuanthaibui204@gmail.com >",
            style: TextStyle(color: Colors.white),
          ),
        ],
      ],
    );
  }
}
