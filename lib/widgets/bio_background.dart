import 'package:flutter/material.dart';
import '../suoc/link_file.dart';

class BioBackground extends StatelessWidget {
  final double overlayOpacity;
  final EdgeInsets padding;
  final Widget child;

  const BioBackground({
    super.key,
    this.overlayOpacity = 0.3,
    this.padding = EdgeInsets.zero,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage(backgroundPath),
          fit: BoxFit.cover,
        ),
      ),
      child: Container(
        color: Colors.black.withValues(alpha: overlayOpacity),
        padding: padding,
        child: child,
      ),
    );
  }
}
