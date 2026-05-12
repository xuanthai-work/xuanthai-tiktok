import 'package:flutter/material.dart';

class GradientDivider extends StatelessWidget {
  final double width;
  final double height;

  const GradientDivider({
    super.key,
    this.width = 200,
    this.height = 1.5,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [Colors.cyanAccent, Colors.blueAccent],
        ),
      ),
    );
  }
}
