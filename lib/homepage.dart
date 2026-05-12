import 'package:bio_tiktok/homeview/home_page_largedesk.dart';
import 'package:bio_tiktok/homeview/home_page_pc.dart';
import 'package:bio_tiktok/homeview/home_page_phone.dart';
import 'package:bio_tiktok/homeview/home_page_tablet.dart';
import 'package:bio_tiktok/suoc/responsive_page.dart';
import 'package:flutter/material.dart';

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Responsive(
        mobile: BioLinkPage(),
        tablet: BioTabletPage(),
        desktop: BioPcPage(),
        largeDesktop: BioLargeDesktopPage(),
      ),
    );
  }
}
