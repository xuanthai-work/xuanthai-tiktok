import 'package:flutter/material.dart';

class DonateSection extends StatelessWidget {
  final double imageSize;
  final double fontSize;
  final double borderRadius;
  final double topPadding;

  const DonateSection({
    super.key,
    this.imageSize = 200,
    this.fontSize = 20,
    this.borderRadius = 20,
    this.topPadding = 40,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(height: topPadding),
        Text(
          'MÃ DONATE MOMO',
          style: TextStyle(color: Colors.white, fontSize: fontSize),
        ),
        const SizedBox(height: 40),
        Container(
          width: imageSize,
          height: imageSize,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(borderRadius),
            image: const DecorationImage(
              image: AssetImage("assets/images/mamomo.jpg"),
              fit: BoxFit.cover,
            ),
          ),
          clipBehavior: Clip.hardEdge,
        ),
      ],
    );
  }
}
